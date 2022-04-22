import React, {Component} from "react";
import ExperimentDetailPage from "../components/ExperimentDetails/ExperimentDetailPage";
import GetApiHelper from "../helpers/api";


export default class ExperimentDetailContainer extends Component {
  constructor(props) {
    super(props);

    let { experimentId } = this.props.match.params;
    this.api = GetApiHelper();

    this.getExperiment(experimentId);

    this.state = {
      experiment: null,
      showModelCannotBeRemoved: false,
      trials: [],
      trialToDelete: null
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
      <ExperimentDetailPage experiment={this.makeExperiment()}
                            onDeleteTrial={this.deleteTrial}
                            onCancelDeleteTrial={this.cancelDeleteTrial}
                            onConfirmDeleteTrial={this.confirmDeleteTrial}
                            onConfirmModelCannotBeRemoved={this.confirmModelCannotBeRemoved}
                            showModelCannotBeRemoved={this.state.showModelCannotBeRemoved}
                            trialToDelete={this.state.trialToDelete} />
    )
  }

  makeExperiment() {
    return {
      id: this.state.experiment ? this.state.experiment.id : null,
      trials: this.state.trials,
    }
  }

  getTrials(experiment) {
    experiment.trials.forEach(trial => {
      this.trialSubscriptions[trial.id] = this.api.getTrial(trial.id).subscribe({
        next: trialOutput => {
          const trials = this.state.trials;
          const currentIndex = trials.findIndex(t => t.id === trialOutput.id);

          if (currentIndex === -1) {
            trials.push(trialOutput);
          } else {
            trials[currentIndex] = trialOutput;
          }
          this.setState({ trials });
        }
      });
    })
  }

  deleteTrial = (trial) => {
    this.setState({
      trialToDelete: trial
    });
  }

  cancelDeleteTrial = () => {
    this.setState({
      trialToDelete: null
    });
  }

  confirmDeleteTrial = async () => {
    const trialId = this.state.trialToDelete.id;
    try {
      await this.api.deleteTrial(trialId);
      this.trialSubscriptions[trialId].unsubscribe();
      this.trialSubscriptions[trialId] = undefined;

      let trials = this.state.trials.filter(t => t.id !== trialId);

      this.setState({
        trials,
        trialToDelete: null
      });
    }
    catch (e) {
      this.setState({
        showModelCannotBeRemoved: true,
        trialToDelete: null
      });
    }
  }

  confirmModelCannotBeRemoved = () => {
    this.setState({
      showModelCannotBeRemoved: false
    });
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
