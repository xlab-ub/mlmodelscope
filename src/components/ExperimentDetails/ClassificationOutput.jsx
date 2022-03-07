import React, {Component} from 'react';

export default class ClassificationOutput extends Component {
  resultsFromInclusiveRange = (x, y) => {
    let resultsInRange = this.props.results.slice(x, y+1);
  }

  render() {
    let results = this.props.results;
    return (
      <div className="classification-output">
        <p className="classification-output__header">Output:</p>
        <dl className="classifcation-output__results">
          <div className="classification-output__result -top-result">
            <dt>{results[0].prediction}</dt>
            <dd>{results[0].confidence}</dd>
          </div>
        </dl>
      </div>
    )
  }
}
