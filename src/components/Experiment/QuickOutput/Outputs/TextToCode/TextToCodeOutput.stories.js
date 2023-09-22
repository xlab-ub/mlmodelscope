import React from "react";
import TextToCodeOutput from "./TextToCodeOutput";
import { TestTextToCodeOutput } from "./testData/testTextToCodeOutput";

export default {
  title: "Experiments/Quick Output/Text To Code",
  component: TextToCodeOutput,
};

const template = (args) => <TextToCodeOutput {...args} />;

export const Default = template.bind({});
Default.args = { trial: TestTextToCodeOutput };
