import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import InputPreview from "./InputPreview";
import ClassificationOutput from "./Outputs/Classification/ClassificationOutput";
import "./QuickOutput.scss";
import PendingOutput from "./Outputs/Classification/PendingOutput";
import ObjectDetection from "./Outputs/ObjectDetection/ObjectDetection";
import {image_classification, image_enhancement, object_detection} from "../../../helpers/TaskIDs";
import ImageEnhancement from "./Outputs/ImageEnhancement/ImageEnhancement";

export default class QuickOutput extends BEMComponent {
  static defaultProps = {
    className: "quick-output",
    features: [],
    input: "",
    compare: () => {
    },
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('header')}>
          <h2 className={this.element('title')}>Try This Model</h2>
          {/*<button className={this.element('share-button')}>Share with community</button> Hidden for now*/}
        </div>
        <div className={this.element('content')}>
          {this.makeOutput()}
        </div>
        <div className={this.element('footer')}>
          <button className={this.element('compare-button')} onClick={this.props.compare}>Compare with other models
          </button>
        </div>
      </div>
    );
  }

  makeOutput() {
    if (this.props.features || this.props.trialOutput.completed_at) {
      switch (this.props.trialOutput.model.output.type) {
        case image_classification:
          return <>
            <InputPreview input={this.props.input} onBackClicked={this.props.onBackClicked}/>
            <ClassificationOutput features={this.props.features}/>
          </>;
        case image_enhancement:
          return <>
            <ImageEnhancement feature={this.props.trialOutput}/>
          </>
        case object_detection:
          return <ObjectDetection trial={this.props.trialOutput}/>
        default:
          return <>
            <InputPreview input={this.props.input} onBackClicked={this.props.onBackClicked}/>
            <PendingOutput unsupportedModel/>
          </>

      }

    } else {
      return (<>
        <InputPreview input={this.props.input} onBackClicked={this.props.onBackClicked}/>
        <PendingOutput/>
      </>);
    }
  }
}
