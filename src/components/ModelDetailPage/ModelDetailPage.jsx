import React, { useRef } from "react";
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
  semantic_segmentation,
  text,
} from "../../helpers/TaskIDs";
import {
    SampleImageClassificationInputs,
    SampleImageEnhancementInputs,
    SampleObjectDetectionInputs,
    SampleSegmentationInputs,
    SampleTextInputs,
} from "../../helpers/sampleImages";

const ModelDetailPage = (props) => {
  const jumpRef = useRef();

  const outputType = props.model?.output?.type || "";

  const getSampleInputs = () => {
    switch (outputType) {
      case object_detection:
        return SampleObjectDetectionInputs;
      case image_enhancement:
        return SampleImageEnhancementInputs;
      case semantic_segmentation:
      case instance_segmentation:
        return SampleSegmentationInputs;
      case text:
        return SampleTextInputs;
      case image_classification:
      default:
        return SampleImageClassificationInputs;
    }
  };

  const renderContent = () => {
    if (props.trialOutput === undefined) {
      return (
        <QuickInput
          model={props.model}
          sampleInputs={getSampleInputs()}
          onRunModelClicked={props.onRunModelClicked}
        />
      );
    } else {
      return (
        <QuickOutput
          input={props.trialOutput.inputs[0]}
          features={
            props.trialOutput.completed_at
              ? props.trialOutput.results.responses[0].features
              : null
          }
          onBackClicked={props.onBackToModelClicked}
          compare={props.compare}
          trialOutput={props.trialOutput}
          inputType={outputType === text ? "text" : "image"}
        />
      );
    }
  };

  if (!props.model) return <></>;

  return (
    <div className="model-detail-page">
      <Header />
      <ModelDetailHeader jumpRef={jumpRef} model={props.model} />
      <div className="model-detail-page__content">{renderContent()}</div>
      <ModelDescription jumpRef={jumpRef} model={props.model} />
    </div>
  );
};

export default ModelDetailPage;
