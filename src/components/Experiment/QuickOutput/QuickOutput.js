import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import InputPreview from "./InputPreview";
import ClassificationOutput from "./Outputs/ClassificationOutput";

export default class QuickOutput extends BEMComponent {
  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('header')}>
          <div className={this.element('title')}>Try This Model</div>
          <button className={this.element('share-button')}>Share with community</button>
        </div>
        <div className={this.element('content')}>
          <InputPreview />
          <ClassificationOutput />
        </div>
        <div className={this.element('footer')}>
          <a className={this.element('try-again')}>Try this again</a>
          <button className={this.element('experiment-button')}>Use in advanced experiment</button>
        </div>
      </div>
    );
  }
}
