import React from 'react';
import PageNavigationSummary from "./PageNavigationSummary";

export default {
  title: 'Components/Navigation/Page Navigation Summary',
  component: PageNavigationSummary,
};

const Template = (args) => <PageNavigationSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [1, 2, 3, 4, 5, 6],
  pageCount: 3,
  selectedPage: 3,
  totalCount: 30
}
