import React from 'react';

import TrialOutputWrapper from "./TrialOutputWrapper";

export default {
  title: 'Experiments/Trial Output',
  component: TrialOutputWrapper,
};

const Template = (args) => <TrialOutputWrapper {...args} />;

export const Classification = Template.bind({});
Classification.args = {
  trial: {
    model: {
      name: "TorchVision+ResNet18",
      framework: {
        name: "PyTorch",
        architectures: [
          {name: "amd64"}
        ]
      }
    },
    results: [
      {
        prediction: "Cat",
        confidence: 96,
      },
      {
        prediction: "Dog",
        confidence: 2,
      },
      {
        prediction: "Mouse",
        confidence: 1,
      },
      {
        prediction: "Tiger shark",
        confidence: 0.5,
      },
      {
        prediction: "Chicken",
        confidence: 0.5,
      }
    ]
  }
};
