import React from 'react';
import ExperimentOverview from "./ExperimentOverview";
import birdy from '../../stories/assets/birdy.png';

export default {
  title: 'Components/Experiment Overview Card',
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
