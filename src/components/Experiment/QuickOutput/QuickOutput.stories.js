import React from 'react';
import QuickOutput from "./QuickOutput";
import TestFeatures, {TestImageClassificationResult} from "./Outputs/Classification/Features";
import kitty from "../../../stories/assets/kitty-large.jpg";

export default {
  title: 'Experiments/Quick Output',
  component: QuickOutput,
};

const Template = (args) => <QuickOutput {...args} />;

export const Default = Template.bind({});
Default.args = {
  features: TestFeatures,
  input: kitty,
  trialOutput: TestImageClassificationResult
}
