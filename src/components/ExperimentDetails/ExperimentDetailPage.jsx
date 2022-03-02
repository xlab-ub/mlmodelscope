import React, {Component} from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import ExperimentOverview from "./ExperimentOverview";

export default class ExperimentDetailPage extends Component {
  render() {
    return (
      <div>
        <ExperimentDetailHeader />
        <ExperimentOverview />
      </div>
    );
  }
}
