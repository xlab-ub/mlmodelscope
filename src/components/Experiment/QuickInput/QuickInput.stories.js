import React from "react";
import QuickInput from "./QuickInput";
import {
  image_classification,
  image_enhancement,
  object_detection,
  semantic_segmentation,
  text,
} from "../../../helpers/TaskIDs";
import {
  SampleImageClassificationInputs,
  SampleImageEnhancementInputs,
  SampleObjectDetectionInputs,
  SampleSegmentationInputs,
} from "../../../helpers/sampleImages";

export default {
  title: "Experiments/Quick Input",
  component: QuickInput,
};

const Template = (args) => <QuickInput {...args} />;

export const ImageClassification = Template.bind({});
ImageClassification.args = {
  sampleInputs: SampleImageClassificationInputs,
  model: {
    output: {
      type: image_classification,
    },
  },
};

export const ObjectDetection = Template.bind({});
ObjectDetection.args = {
  sampleInputs: SampleObjectDetectionInputs,
  model: {
    output: {
      type: object_detection,
    },
  },
};

export const SemanticSegmentation = Template.bind({});
SemanticSegmentation.args = {
  sampleInputs: SampleSegmentationInputs,
  model: {
    output: {
      type: semantic_segmentation,
    },
  },
};

export const ImageEnhancement = Template.bind({});
ImageEnhancement.args = {
  sampleInputs: SampleImageEnhancementInputs,
  model: {
    output: {
      type: image_enhancement,
    },
  },
};

export const Text = Template.bind({});
Text.args = {
  sampleInputs: [],
  model: {
    output: {
      type: text,
    },
  },
};
