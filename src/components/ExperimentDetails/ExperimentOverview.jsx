import React, {Component} from 'react';

export default class ExperimentOverview extends Component {
  render() {
    return (
      <div className="experiment-overview">
        <p className="experiment-overview__title">Overview</p>
        <p className="experiment-overview__header">Input:</p>
        <p className="experiment-overview__header">Output:</p>
      </div>
    );
  }
}
