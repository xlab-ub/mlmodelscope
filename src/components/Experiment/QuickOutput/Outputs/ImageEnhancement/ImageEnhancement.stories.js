import React from 'react';
import ImageEnhancement from "./ImageEnhancement";
import {TestImageEnhancementData} from "./testData/TestFeatures";

export default {
  title: "Experiments/Trial Output/Image Enhancement",
  component: ImageEnhancement
}

const Template = (args) => <ImageEnhancement {...args}/>

export const Default = Template.bind({});

Default.args = {trial: TestImageEnhancementData};
