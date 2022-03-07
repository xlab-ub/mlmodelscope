import React, {Component} from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import ExperimentOverview from "./ExperimentOverview";
import TrialOutputWrapper from "./TrialOutputWrapper";

export default class ExperimentDetailPage extends Component {
  render() {
    let trialKey = 0;
    let trialComponents = this.props.experiment.trials.map(trial => (
      <div key={trialKey++} className="experiment-detail-page__trial">
        <TrialOutputWrapper trial={trial} />
      </div>
    ));

    return (
      <div className="experiment-detail-page">
        <ExperimentDetailHeader />
        <div className="experiment-detail-page__content">
          <div className="experiment-detail-page__overview-section">
            <ExperimentOverview />
          </div>
          <div className="experiment-detail-page__trials-section">
            <p className="experiment-detail-page__trials-header">Trials for your experiment</p>
            {trialComponents}
          </div>
        </div>
      </div>
    );
  }
}
