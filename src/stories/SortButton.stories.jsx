import React from 'react';
import SortButton from '../components/Buttons/SortButton'

export default {
  title: 'Components/Buttons/Sort Button',
  component: SortButton,
};

const Template = (args) => <SortButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isSortAscending: true,
};
