import React from 'react';
import ModelCannotBeRemovedModal from "./ModelCannotBeRemovedModal";

export default {
  title: 'Modals/Model Cannot be Removed Modal',
  component: ModelCannotBeRemovedModal,
}

const Template = (args) => <ModelCannotBeRemovedModal {...args} />;

export const Default = Template.bind({});
