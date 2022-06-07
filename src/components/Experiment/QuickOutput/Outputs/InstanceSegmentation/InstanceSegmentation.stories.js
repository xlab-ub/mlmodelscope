import React from "react";
import InstanceSegmentation from "./InstanceSegmentation";
import {
  TestInstanceSegmentationOutput,
  TestInstanceSegmentationOutput2,
  TestInstanceSegmentationOutput3,
  TestInstanceSegmentationOutput4,
  TestInstanceSegmentationOutput5,
  TestInstanceSegmentationOutputNoFeatures
} from "./testData/TestFeatures";

export default {
  title: "Experiments/Quick Output/Instance Segmentation",
  component: InstanceSegmentation
}

const Template = (args) => <InstanceSegmentation {...args} />

export const Default = Template.bind({});

Default.args = {trial: TestInstanceSegmentationOutput}

export const Default2 = Template.bind({});

Default2.args = {trial: TestInstanceSegmentationOutput2}

export const Default3 = Template.bind({});

Default3.args = {trial: TestInstanceSegmentationOutput3}

export const Default4 = Template.bind({});

Default4.args = {trial: TestInstanceSegmentationOutput4}

export const Default5 = Template.bind({});

Default5.args = {trial: TestInstanceSegmentationOutput5}

export const NoPredictions = Template.bind({});

NoPredictions.args = {trial: TestInstanceSegmentationOutputNoFeatures};

