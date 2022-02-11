import React from 'react';
import Button from '../components/Buttons/Button'
import ModelCard from "../components/ModelList/ModelCard";

export default {
  title: 'Buttons /Primary Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "Primary Button",
  link: "",
  primary: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: "Secondary Button",
  link: "",
  primary: "secondary",
};
