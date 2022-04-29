import React from 'react';
import QuickInput from "./QuickInput";
import birdy from '../../../stories/assets/birdy.png';
import crabby from '../../../stories/assets/crabby.png';
import kitty from '../../../stories/assets/kitty.png';
import sampleObjectDetection1 from '../../../resources/img/objdect1.jpg';

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

export const ObjectDetection = Template.bind({});
ObjectDetection.args = {
  sampleInputs: [
    sampleObjectDetection1,
    sampleObjectDetection1,
    sampleObjectDetection1,
  ]
}
