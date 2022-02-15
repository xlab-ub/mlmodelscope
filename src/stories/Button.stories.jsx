import React from 'react';
import Button from '../components/Buttons/Button'
import ModelCard from "../components/ModelList/ModelCard";

export default {
  title: 'Buttons / Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "Primary Button",
  link: "",
  isPrimary: true,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  content: "Primary Button",
  link: "",
  isPrimary: true,
  isSmall: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: "Secondary Button",
  link: "",
  isPrimary: false,
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  content: "Secondary Button",
  link: "",
  isPrimary: false,
  isSmall: true,
};
