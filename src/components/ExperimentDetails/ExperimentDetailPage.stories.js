import React from 'react';

import ExperimentDetailPage from "./ExperimentDetailPage";

export default {
  title: 'Experiments/Experiment Detail Page',
  component: ExperimentDetailPage,
};

const Template = (args) => <ExperimentDetailPage {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
