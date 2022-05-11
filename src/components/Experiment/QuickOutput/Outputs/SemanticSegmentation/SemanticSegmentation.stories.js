import React from "react";
import SemanticSegmentation from "./SemanticSegmentation";
import {TestImageSegmentationResult} from "./testData/TestFeatures";

export default {
  title: "Experiments/Quick Output/Semantic Segmentation",
  component: SemanticSegmentation
}

const Template = (args) => <SemanticSegmentation {...args} />

export const Default = Template.bind({});

Default.args = {trial: TestImageSegmentationResult}
