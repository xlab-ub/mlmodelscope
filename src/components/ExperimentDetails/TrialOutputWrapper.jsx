import React, {Component} from 'react';
import ClassificationOutput from "./ClassificationOutput";

export default class TrialOutputWrapper extends Component {
  render() {
    return (
      <div>
        <p>Trial output here</p>
        <ClassificationOutput />
      </div>
    )
  }
}
