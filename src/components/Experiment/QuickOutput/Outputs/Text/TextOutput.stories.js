import React from "react";
import TextOutput from "./TextOutput";
import { TestTextOutput } from "./testData/testTextOutput";

export default {
  title: "Experiments/Quick Output/Text",
  component: TextOutput,
};

const template = (args) => <TextOutput {...args} />;

export const Default = template.bind({});
Default.args = { trial: TestTextOutput };
