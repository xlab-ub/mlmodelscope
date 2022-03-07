import React, {Component} from 'react';

export default class ClassificationOutput extends Component {
  resultsFromInclusiveRange = (x, y) => {
    let resultsInRange = this.props.results.slice(x, y+1);
  }

  render() {
    let predictions = this.props.results.responses[0].features;
    return (
      <div className="classification-output">
        <p className="classification-output__header">Output:</p>
        <dl className="classifcation-output__results">
          <div className="classification-output__result -top-result">
            <dt>{predictions[0].classification.label}</dt>
            <dd>{predictions[0].probability}</dd>
          </div>
        </dl>
      </div>
    )
  }
}
