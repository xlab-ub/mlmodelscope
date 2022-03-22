import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import InputPreview from "./InputPreview";
import ClassificationOutput from "./Outputs/Classification/ClassificationOutput";
import "./QuickOutput.scss";

export default class QuickOutput extends BEMComponent {
  static defaultProps = {
    features: [],
    input: ""
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('header')}>
          <h2 className={this.element('title')}>Try This Model</h2>
          {/*<button className={this.element('share-button')}>Share with community</button> Hidden for now*/}
        </div>
        <div className={this.element('content')}>
          <InputPreview input={this.props.input} onBackClicked={this.props.onBackClicked} />
          <ClassificationOutput features={this.props.features} />
        </div>
        <div className={this.element('footer')}>
          <button className={this.element('compare-button')}>Compare with other models</button>
        </div>
      </div>
    );
  }
}
