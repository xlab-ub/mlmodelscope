import React, {Component} from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import ExperimentOverview from "./ExperimentOverview";
import TrialOutputWrapper from "./TrialOutputWrapper";
import Button from "../Buttons/Button";
import Header from "../Header/Header";

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
        <Header />
        <ExperimentDetailHeader />
        <div className="experiment-detail-page__content">
          <div className="experiment-detail-page__first-column">
            <div className="experiment-detail-page__overview-section">
              {this.getExperimentOverview()}
            </div>
          </div>
          <div className="experiment-detail-page__trials-section">
            <div className="experiment-detail-page__trials-header-box">
              <p className="experiment-detail-page__trials-header">Trials for your experiment</p>
              <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false} link={this.getAddModelsLink()} />
            </div>
            {trialComponents}
          </div>
        </div>
      </div>
    );
  }

  getExperimentOverview() {
    if (!this.props.experiment || this.props.experiment.trials.length === 0)
      return;

    let firstModel = this.props.experiment.trials[0].model;
    let task = firstModel ? firstModel.output.type : 'classification';
    let inputs = this.props.experiment.trials[0].inputs;

    return (<ExperimentOverview task={task} inputs={inputs} />);
  }

  getAddModelsLink() {
    if (!this.props.experiment) {
      return null;
    }

    return `/experiment/${this.props.experiment.id}/add-models`;
  }
}
