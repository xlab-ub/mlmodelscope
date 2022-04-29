import React, {Component} from "react";
import ModelDetailHeader from "./ModelDetailHeader";
import QuickInput from "../Experiment/QuickInput/QuickInput";
import QuickOutput from "../Experiment/QuickOutput/QuickOutput";
import Header from "../Header/Header";
import ModelDescription from "./ModelDescription";
import objdect1 from '../../resources/img/obj-1.jpg';
import objdect2 from '../../resources/img/obj-2.jpg';
import objdect3 from '../../resources/img/obj-3.jpg';

const SampleInputs = [
  'https://s3.amazonaws.com/uploads.staging.mlmodelscope.org/birdy.png',
  'https://s3.amazonaws.com/uploads.staging.mlmodelscope.org/kitty.png',
  'https://s3.amazonaws.com/uploads.staging.mlmodelscope.org/crabby.png'
]

const SampleObjectDetectionInputs = [
  objdect1,
  objdect2,
  objdect3
]

export default class ModelDetailPage extends Component {
  static defaultProps = {
    compare: () => {
    },
  }

  getSampleInputs = () => {
    switch (this.props.model?.output?.type || "") {
      case "image_object_detection":
        return SampleObjectDetectionInputs;
      case "image_classification":
      default:
        return SampleInputs;
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
      return (<QuickInput sampleInputs={this.getSampleInputs()} onRunModelClicked={this.props.onRunModelClicked}/>);
    } else {
      return (<QuickOutput input={this.props.trialOutput.inputs[0]}
                           features={this.props.trialOutput.completed_at ? this.props.trialOutput.results.responses[0].features : null}
                           onBackClicked={this.props.onBackToModelClicked} compare={this.props.compare}
                           trialOutput={this.props.trialOutput}/>);
    }
  }
}
