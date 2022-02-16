import React from 'react';

import PageNavigation from "../components/Paginator/PageNavigation";

export default {
  title: 'Navigation/Page Navigation',
  component: PageNavigation,
};

const Template = (args) => <PageNavigation {...args} />;

export const Test = Template.bind({});
Test.args = {
  key: 'test',
  pageCount: 2,
  selectedPage: 1
}
