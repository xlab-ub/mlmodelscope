import React, {Component} from "react";
import ModelDetailHeader from "./ModelDetailHeader";
import QuickInput from "../Experiment/QuickInput/QuickInput";
import QuickOutput from "../Experiment/QuickOutput/QuickOutput";
import Header from "../Header/Header";
import ModelDescription from "./ModelDescription";
import {
  image_classification,
  image_enhancement,
  instance_segmentation,
  object_detection,
  semantic_segmentation
} from "../../helpers/TaskIDs";
import {
  SampleImageClassificationInputs,
  SampleImageEnhancementInputs,
  SampleObjectDetectionInputs,
  SampleSegmentationInputs
} from "../../helpers/sampleImages";


export default class ModelDetailPage extends Component {
  static defaultProps = {
    compare: () => {
    },
  }

  getSampleInputs = () => {
    switch (this.props.model?.output?.type || "") {
      case object_detection:
        return SampleObjectDetectionInputs;
      case image_enhancement:
        return SampleImageEnhancementInputs;
      case semantic_segmentation:
      case instance_segmentation:
        return SampleSegmentationInputs;
      case image_classification:
      default:
        return SampleImageClassificationInputs;
    }
  }

  render() {
    if (!this.props.model) return <></>

    return (
      <div className="model-detail-page">
        <Header/>
        <ModelDetailHeader model={this.props.model}/>
        <div className="model-detail-page__content">
          {this.renderContent()}
        </div>
        <ModelDescription model={this.props.model}/>
      </div>
    )
  }

  renderContent = () => {
    if (this.props.trialOutput === undefined) {
      return (<QuickInput model={this.props.model} sampleInputs={this.getSampleInputs()}
                          onRunModelClicked={this.props.onRunModelClicked}/>);
    } else {
      return (<QuickOutput input={this.props.trialOutput.inputs[0]}
                           features={this.props.trialOutput.completed_at ? this.props.trialOutput.results.responses[0].features : null}
                           onBackClicked={this.props.onBackToModelClicked} compare={this.props.compare}
                           trialOutput={this.props.trialOutput}/>);
    }
  }
}
