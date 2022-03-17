import React, {Component} from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import ExperimentOverview from "./ExperimentOverview";
import TrialOutputWrapper from "./TrialOutputWrapper";
import Button from "../Buttons/Button";

export default class ExperimentDetailPage extends Component {
  render() {
    let trialKey = 0;
    let trialComponents = this.props.experiment.trials.map(trial => (
      <div key={trialKey++} className="experiment-detail-page__trial">
        <TrialOutputWrapper trial={trial} />
      </div>
    ));

    let firstModel = this.props.experiment.trials[0].model;
    let inputs = this.props.experiment.trials[0].inputs;

    return (
      <div className="experiment-detail-page">
        <ExperimentDetailHeader />
        <div className="experiment-detail-page__content">
          <div className="experiment-detail-page__first-column">
            <div className="experiment-detail-page__overview-section">
              <ExperimentOverview task={firstModel.output.type} inputs={inputs} />
            </div>
          </div>
          <div className="experiment-detail-page__trials-section">
            <div className="experiment-detail-page__trials-header-box">
              <p className="experiment-detail-page__trials-header">Trials for your experiment</p>
              <Button content={"Add model"} isPrimary={false} isSmall={false} />
            </div>
            {trialComponents}
          </div>
        </div>
      </div>
    );
  }
}
