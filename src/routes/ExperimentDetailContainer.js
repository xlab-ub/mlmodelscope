import React, {Component} from "react";
import ExperimentDetailPage from "../components/ExperimentDetails/ExperimentDetailPage";
import GetApiHelper from "../helpers/api";
import Task from "../helpers/Task";
import {image_classification} from "../helpers/TaskIDs";
import MultipleSort from "../helpers/MultipleSort";


export const ExperimentDetailModalTypes = {
  none: "NONE",
  modelCannotBeRemoved: "MODEL_CANNOT_BE_REMOVED",
  confirmDeleteModel: "MODEL_DELETE_CONFIRM",
  inputCannotBeRemoved: "INPUT_CANNOT_BE_REMOVED",
  confirmDeleteInput: "INPUT_DELETE_CONFIRM",
  addInput: "INPUT_ADD"
}

export default class ExperimentDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.api = GetApiHelper();


    this.state = {
      experiment: null,
      trials: [],
      trialToDelete: null,
      trialIsDeleting: false,
      selectedInput: "",
      modalType: ExperimentDetailModalTypes.none
    }

    this.trialSubscriptions = [];
  }

  getTask() {
    if (this.state.trials && this.state.trials.length > 0)
      return Task.getStaticTask(this.state.trials[0].model.output.type);
    return Task.getStaticTask(image_classification);
  }

  componentDidMount() {
    this.getExperiment();
  }

  componentWillUnmount() {
    this.trialSubscriptions.forEach(s => s.unsubscribe());

    if (this.experimentSubscription)
      this.experimentSubscription.unsubscribe();
  }


  render() {
    return (
      <ExperimentDetailPage experiment={this.makeExperiment()}
                            onDeleteTrial={this.showDeleteModal}
                            onCancelDeleteTrial={this.cancelDeleteTrial}
                            onConfirmDeleteTrial={this.confirmDeleteModel}
                            trialIsDeleting={this.state.trialIsDeleting}
                            onConfirmModelCannotBeRemoved={this.confirmModelCannotBeRemoved}
                            showModelCannotBeRemoved={this.state.showModelCannotBeRemoved}
                            trialToDelete={this.state.trialToDelete}
                            inputs={this.getInputs()}
                            addInput={this.addInput}
                            updateInput={this.updateInput}
                            getAddModelsLink={() => `/experiment/${this.state.experiment?.id}/add-models`}
                            deleteInput={this.deleteInput}
                            modalType={this.state.modalType}
                            showAddInputModal={this.showAddInputModal}
                            selectedInput={this.state.selectedInput}
                            showDeleteInputModal={this.showDeleteInputModal}
                            task={this.getTask()}
      />
    )
  }

  getSelectedTrials = () => {
    let filtered = this.state.trials.filter(trial => trial.inputs[0] === this.state.selectedInput);

    const sortingOptions = [
      (a) => a.model.name,
      (a) => a.model.framework.name
    ]

    return MultipleSort(filtered, sortingOptions);
  }
  getInputs = () => {
    return this.state.trials.filter((t, i, a) => a.findIndex(tr => tr.inputs[0] === t.inputs[0]) === i).map(trial => trial.inputs[0]);
  }

  makeExperiment() {
    return {
      id: this.state.experiment ? this.state.experiment.id : null,
      trials: this.getSelectedTrials(),
    }
  }

  updateInput = (newInput) => this.setState({selectedInput: newInput});

  getTrials(experiment) {
    experiment.trials.forEach(trial => {
      this.addTrial(trial.id);
    })
  }

  showAddInputModal = () => this.setState({modalType: ExperimentDetailModalTypes.addInput})
  showDeleteModal = (trial, modalType) => {
    const isForDeletingModel = modalType === ExperimentDetailModalTypes.confirmDeleteModel;
    const canDelete = isForDeletingModel ? this.getUniqueModels().length > 1 : this.getInputs().length > 1;

    if (canDelete) {
      this.setState({
        trialToDelete: trial,
        modalType: modalType
      });
    } else {
      this.setState({
        modalType: isForDeletingModel ?
          ExperimentDetailModalTypes.modelCannotBeRemoved :
          ExperimentDetailModalTypes.inputCannotBeRemoved
      })
    }
  }
  cancelDeleteTrial = () => {
    this.setState({
      trialToDelete: null,
      modalType: ExperimentDetailModalTypes.none
    });
  }
  getModelOutputType = () => {
    let modelOutputType = "";
    if (this.state.trials.length > 0)
      modelOutputType = this.state.trials[0].model.output.type;
    return modelOutputType;
  }
  getUniqueModels = () => {
    return this.state.trials.filter((t, i, a) => a.findIndex(tr => tr.model.id === t.model.id) === i).map(trial => trial.model.id);
  }
  runTrial = async (modelId, input) => {
    let fauxModel = {id: modelId, output: {type: this.getModelOutputType()}};

    let trial = await this.api.runTrial(fauxModel, input, this.state.experiment.id);

    this.addTrial(trial.trialId);
  }
  addTrial = (trialId) => {
    if (!this.trialSubscriptions[trialId]) {
      this.trialSubscriptions[trialId] = this.api.getTrial(trialId).subscribe({
        next: trialOutput => {
          const trials = this.state.trials;
          const currentIndex = trials.findIndex(t => t.id === trialOutput.id);
          if (trialOutput.completed_at || currentIndex === -1) {

            if (currentIndex === -1) {
              trials.push(trialOutput);
            } else {
              trials[currentIndex] = trialOutput;
            }

            this.setState({trials, selectedInput: this.state.selectedInput || trialOutput.inputs[0]});
          }

        }
      })
    }
  }
  hasNoInputs = () => {
    const inputs = this.getInputs();
    return inputs.length === 0 || inputs[0] === "";
  }

  addInput = async (input) => {
    let inputs = Array.isArray(input) ? input : [input];

    if (this.props.addInput) {
      this.props.addInput(inputs);
      return;
    }


    const models = this.getUniqueModels();
    const storedInputs = this.getInputs();
    let modelPromises = [];
    inputs.forEach(input => {
      if (storedInputs.indexOf(input) === -1)
        modelPromises = models.map(model => this.runTrial(model, input));
    });
    await Promise.all(modelPromises);
    this.setState({selectedInput: inputs[0]});

    if (this.hasNoInputs())
      await this.removeTrials((trial) => !trial.inputs || trial.inputs[0] === "");
  }
  confirmDeleteModel = async () => {
    this.setState({trialIsDeleting: true});
    setTimeout(async () => {
      const trial = this.state.trialToDelete;
      try {
        await this.removeTrials((t) => t.model.id === trial.model.id);
      } catch (err) {
        console.error(err);
        this.setState({
          trialToDelete: null,
          modalType: ExperimentDetailModalTypes.modelCannotBeRemoved
        });
      }
    }, 500);
  }
  showDeleteInputModal = (input) => {
    if (this.getInputs().length > 1) {
      const fauxTrial = {inputs: [input]};
      this.setState({trialToDelete: fauxTrial, modalType: ExperimentDetailModalTypes.confirmDeleteInput});
    } else {
      this.setState({modalType: ExperimentDetailModalTypes.inputCannotBeRemoved})
    }

  }
  deleteInput = async () => {
    this.setState({trialIsDeleting: true});
    setTimeout(async () => {
      const trial = this.state.trialToDelete;
      const input = trial.inputs[0];
      try {
        await this.removeTrials((t) => t.inputs[0] === input);
        if (this.state.selectedInput === input) {
          let firstRemainingInput = this.state.trials.filter(t => t.inputs[0] !== input)[0].inputs[0];
          this.setState({
            selectedInput: firstRemainingInput
          })
        }
      } catch (err) {
        console.error(err);
        this.setState({
          showModelCannotBeRemoved: true,
          trialToDelete: null
        });
      }
    }, 500)
  }
  confirmModelCannotBeRemoved = () => {
    this.setState({
      modalType: ExperimentDetailModalTypes.none
    });
  }

  getExperiment = async () => {
    if (this.props.experiment) {
      this.setState({
        trials: this.props.experiment.trials,
        experiment: {id: this.props.experiment.id}
      })
    } else {
      let {experimentId} = this.props.match.params;
      this.experimentSubscription = this.api.getExperiment(experimentId).subscribe({
        next: experiment => {
          this.getTrials(experiment);
          this.setState({experiment});
        }
      });
    }
  }

  removeTrials = async (predicate) => {
    const trialsToRemove = this.state.trials.filter(predicate);
    let promises = trialsToRemove.map(async trial => {
      this.trialSubscriptions[trial.id].unsubscribe();
      this.trialSubscriptions[trial.id] = undefined;
      return this.api.deleteTrial(trial.id);
    });

    await Promise.all(promises);

    this.setState({
      trials: this.state.trials.filter((v, i, a) => !predicate(v, i, a)),
      trialToDelete: null,
      modalType: ExperimentDetailModalTypes.none
    });
  }

}
