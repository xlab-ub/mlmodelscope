import React from 'react';
import Header from "./Header";

export default {
  title: 'Layout/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const WithTestMenus = Template.bind({});
WithTestMenus.args = {testMenus: true};
