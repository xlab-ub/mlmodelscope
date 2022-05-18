import React from 'react';
import HomePage from "./HomePage";
import Footer from "../Footer/Footer";
import {MemoryRouter} from "react-router-dom";
import {TestImageClassificationResult} from "../Experiment/QuickOutput/Outputs/Classification/Features";
import {TestObjectDetectionResult} from "../Experiment/QuickOutput/Outputs/ObjectDetection/testData/TestFeatures";
import {
  TestImageSegmentationResult
} from "../Experiment/QuickOutput/Outputs/SemanticSegmentation/testData/TestFeatures";
import {TestImageEnhancementData} from "../Experiment/QuickOutput/Outputs/ImageEnhancement/testData/TestFeatures";

export default {
  title: 'Home/Splash Page',
  component: HomePage,
};

const Template = (args) => <MemoryRouter><HomePage {...args} /></MemoryRouter>;

export const Default = Template.bind({});

const FooterTemplate = (args) => <MemoryRouter>
  <HomePage {...args} />
  <Footer/>
</MemoryRouter>

export const WithFooter = FooterTemplate.bind({});

export const SampleImageClassification = FooterTemplate.bind({});
SampleImageClassification.args = {demoTrialOutput: TestImageClassificationResult}

export const SampleObjectDetection = FooterTemplate.bind({});
SampleObjectDetection.args = {demoTrialOutput: TestObjectDetectionResult};

export const SampleSemanticSegmentation = FooterTemplate.bind({});
SampleSemanticSegmentation.args = {demoTrialOutput: TestImageSegmentationResult};

export const SampleImageEnhancement = FooterTemplate.bind({});
SampleImageEnhancement.args = {demoTrialOutput: TestImageEnhancementData};
