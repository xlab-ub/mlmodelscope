import React from "react";
import InstanceSegmentation from "./InstanceSegmentation";
import {TestInstanceSegmentationOutput, TestInstanceSegmentationOutputNoFeatures} from "./testData/TestFeatures";

export default {
  title: "Experiments/Quick Output/Instance Segmentation",
  component: InstanceSegmentation
}

const Template = (args) => <InstanceSegmentation {...args} />

export const Default = Template.bind({});

Default.args = {trial: TestInstanceSegmentationOutput}

export const NoPredictions = Template.bind({});

NoPredictions.args = {trial: TestInstanceSegmentationOutputNoFeatures};
