import React from "react";
import SelectedModelsBanner from "../components/ModelList/SelectedModelsBanner";

export default {
  title: 'Models/Selected Models Banner',
  component: SelectedModelsBanner
}

const Template = (args) => <SelectedModelsBanner {...args} />;

const allModels = require('./assets/model_data.json').models;

export const Standard = Template.bind({});
Standard.args = {
  key: 'key',
  selectedModels: allModels.slice(0, 6)
}
