import React from "react";
import InstanceSegmentation from "./InstanceSegmentation";
import {TestInstanceSegmentationOutput} from "./testData/TestFeatures";

export default {
  title: "Experiments/Trial Output/Instance Segmentation",
  component: InstanceSegmentation
}

const Template = (args) => <InstanceSegmentation {...args} />

export const Default = Template.bind({});

Default.args = {trial: TestInstanceSegmentationOutput}
