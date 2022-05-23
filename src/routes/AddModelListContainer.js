import React, {Component} from "react";
import ModelListContainer from "./ModelListContainer";
import GetApiHelper from "../helpers/api";

export default class AddModelListContainer extends Component {
  constructor(props) {
    super(props);

    let {experimentId} = this.props.match.params;
    this.api = GetApiHelper();

    this.getExperiment(experimentId);

    this.state = {
      trials: [],
    }

    this.trialSubscriptions = [];
  }

  componentWillUnmount() {
    this.trialSubscriptions.forEach(s => s.unsubscribe());

    if (this.experimentSubscription)
      this.experimentSubscription.unsubscribe();
  }

  render() {
    return (
      <ModelListContainer add={true} runModels={(selectedModels) => {
        this.runModels(selectedModels)
      }} selectedModels={this.getModelsFromTrials()}/>
    )
  }

  runModels(selectedModels) {
    const modelsFromTrials = this.getModelsFromTrials();
    const filteredSelectedModels = selectedModels.filter(model => {
      return !modelsFromTrials.some(m => m.id === model.id);
    });

    const inputs = this.getInputsFromTrials();

    const trialPromises = filteredSelectedModels.map((model) => {
      return inputs.map(inputUrl => this.api.runTrial(model, inputUrl, this.state.experiment.id));
    }).flat();

    Promise.all(trialPromises).then(() => {
      this.props.history.push(`/experiment/${this.state.experiment.id}`);
    });
  }

  getInputsFromTrials = () => {
    return this.state.trials.filter((t, i, a) => a.findIndex(tr => tr.inputs[0] === t.inputs[0]) === i).map(trial => trial.inputs[0]);
  }

  getModelsFromTrials() {
    return this.state.trials.map(t => t.model);
  }

  getTrials(experiment) {
    experiment.trials.forEach(trial => {
      this.trialSubscriptions.push(this.api.getTrial(trial.id).subscribe({
        next: trialOutput => {
          const trials = this.state.trials;
          const currentIndex = trials.findIndex(t => t.id === trialOutput.id);

          if (currentIndex === -1) {
            trials.push(trialOutput);
            this.setState({trials});
          }
        }
      }));
    })
  }

  getExperiment = async (experimentId) => {
    this.experimentSubscription = this.api.getExperiment(experimentId).subscribe({
      next: experiment => {
        this.getTrials(experiment);
        this.setState({experiment});
      }
    });
  }
}
