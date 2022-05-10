import React from "react";
import ObjectDetection from "./ObjectDetection";
import {TestObjectDetectionResult, TestObjectDetectionResultNoBoundingBoxes} from "./testData/TestFeatures";

export default {
  title: "Experiments/Trial Output/Object Detection",
  component: ObjectDetection
}

const Template = (args) => <ObjectDetection {...args} />

export const Default = Template.bind({});

Default.args = {trial: TestObjectDetectionResult}

export const NoPredictions = Template.bind({});

NoPredictions.args = {trial: TestObjectDetectionResultNoBoundingBoxes};
