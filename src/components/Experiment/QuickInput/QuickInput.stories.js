import React from 'react';
import QuickInput from "./QuickInput";
import birdy from '../../../stories/assets/birdy.png';
import crabby from '../../../stories/assets/crabby.png';
import kitty from '../../../stories/assets/kitty.png';

export default {
  title: 'Experiments/Quick Input',
  component: QuickInput,
};

const Template = (args) => <QuickInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  sampleInputs: [
    kitty,
    crabby,
    birdy
  ]
}
