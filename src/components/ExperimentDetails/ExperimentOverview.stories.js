import React from 'react';
import ExperimentOverview from "./ExperimentOverview";
import kitty from '../../stories/assets/kitty.png';
import birdy from '../../stories/assets/birdy.png';

export default {
  title: 'Experiments/Experiment Overview',
  component: ExperimentOverview,
};

const Template = (args) => <ExperimentOverview {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  inputs: [
    birdy
  ],
  task: "classification"
};
