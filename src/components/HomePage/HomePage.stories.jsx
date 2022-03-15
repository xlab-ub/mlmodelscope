import React from 'react';
import HomePage from "./HomePage";

export default {
  title: 'Home/Splash Page',
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
