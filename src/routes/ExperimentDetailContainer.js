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
      trials: []
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
      <ExperimentDetailPage experiment={this.makeExperiment()} />
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
      this.trialSubscriptions.push(this.api.getTrial(trial.id).subscribe({
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
