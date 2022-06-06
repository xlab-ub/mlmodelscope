import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import InputPreview from "./InputPreview";
import ClassificationOutput from "./Outputs/Classification/ClassificationOutput";
import PendingOutput from "./Outputs/Classification/PendingOutput";
import {
  image_classification,
  image_enhancement,
  instance_segmentation,
  object_detection,
  semantic_segmentation
} from "../../../helpers/TaskIDs";
import ObjectDetection from "./Outputs/ObjectDetection/ObjectDetection";
import ImageEnhancement from "./Outputs/ImageEnhancement/ImageEnhancement";
import SemanticSegmentation from "./Outputs/SemanticSegmentation/SemanticSegmentation";
import ProcessFailed from "./ProcessFailed";
import "./QuickOutput.scss";
import InstanceSegmentation from "./Outputs/InstanceSegmentation/InstanceSegmentation";

export default class QuickOutput extends BEMComponent {
  static defaultProps = {
    className: "quick-output",
    features: [],
    input: "",
    compare: () => {
    },
    processFailed: false
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('header')}>
          {!this.props.hideHeader &&
            <h2 className={this.element('title')}>Try This Model</h2>
          }
          {/*<button className={this.element('share-button')}>Share with community</button> Hidden for now*/}
        </div>
        <div className={this.element('content')}>
          {this.makeOutput()}
        </div>
        <div className={this.element('footer')}>
          {this.props.showLearnMoreLink &&
            <a href={`/model/${this.props.trialOutput?.model?.id}`} className={this.element('compare-button')}
               onClick={this.props.compare}>Learn more about this model
            </a>
          }
          {!this.props.showLearnMoreLink &&
            <button className={this.element('compare-button')} onClick={this.props.compare}>Compare with other models
            </button>
          }

        </div>
      </div>
    );
  }

  makeOutput() {
    if (this.props.processFailed) {
      return <>
        <InputPreview input={this.props.input} onBackClicked={this.props.onBackClicked}/>
        <ProcessFailed/>
      </>
    } else if (this.props.features || this.props.trialOutput.completed_at) {
      switch (this.props.trialOutput.model.output.type) {
        case image_classification:
          return <>
            <InputPreview input={this.props.input} onBackClicked={this.props.onBackClicked}/>
            <ClassificationOutput features={this.props.features} trial={this.props.trialOutput}/>
          </>;
        case image_enhancement:
          return <>
            <ImageEnhancement trial={this.props.trialOutput}
                              onBackClicked={this.props.onBackClicked}
                              feature={this.props.trialOutput.results.responses[0].features[0]}/>
          </>
        case instance_segmentation:
          return <InstanceSegmentation onBackClicked={this.props.onBackClicked} trial={this.props.trialOutput}/>
        case object_detection:
          return <ObjectDetection onBackClicked={this.props.onBackClicked} trial={this.props.trialOutput}/>
        case semantic_segmentation:
          return <SemanticSegmentation onBackClicked={this.props.onBackClicked} trial={this.props.trialOutput}/>
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
