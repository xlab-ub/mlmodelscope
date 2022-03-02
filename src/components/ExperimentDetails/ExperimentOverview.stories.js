import React from 'react';

import ExperimentOverview from "./ExperimentOverview";

export default {
  title: 'Experiments/Experiment Overview',
  component: ExperimentOverview,
};

const Template = (args) => <ExperimentOverview {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
