import React from 'react';
import SortButton from '../components/Buttons/SortButton'
import {SortDirection} from "../components/ModelList/useModelListWithFilters";

export default {
    title: 'Components/Buttons/Sort Button',
    component: SortButton,
};

const Template = (args) => <SortButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    sortDirection: SortDirection.ASC,
};
