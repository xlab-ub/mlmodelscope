import React from "react";
import ImageSegmentation from "./ImageSegmentation";
import {TestObjectDetectionResult} from "../ObjectDetection/testData/TestFeatures";

export default {
  title: "Experiments/Quick Output/Image Segmentation",
  component: ImageSegmentation
}

const Template = (args) => <ImageSegmentation {...args} />

export const Default = Template.bind({});

Default.args = {trial: TestObjectDetectionResult}
