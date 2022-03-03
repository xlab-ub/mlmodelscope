import React, {Component} from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import ExperimentOverview from "./ExperimentOverview";
import "./ExperimentDetailPage.scss";

export default class ExperimentDetailPage extends Component {
  render() {
    return (
      <div className="experiment-detail-page">
        <ExperimentDetailHeader />
        <div className="experiment-detail-page__content">
          <div className="experiment-detail-page__overview-section">
            <ExperimentOverview />
          </div>
          <div className="experiment-detail-page__trials-section">
            <p>Trial stuff goes here</p>
          </div>
        </div>
      </div>
    );
  }
}
