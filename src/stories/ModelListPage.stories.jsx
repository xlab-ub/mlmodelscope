import React from 'react';

import ModelListPage from "../routes/ModelListPage";

export default {
  title: 'Models/Model List Page',
  component: ModelListPage,
};

const Template = (args) => <ModelListPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  key: 'key',
};
