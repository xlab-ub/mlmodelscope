import React from 'react';

import ExperimentDetailPage from "./ExperimentDetailPage";

export default {
  title: 'Experiments/Experiment Detail Page',
  component: ExperimentDetailPage,
};

const Template = (args) => <ExperimentDetailPage {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  experiment: {
    id: 0,
    task: "classification",
    trials: [
      {
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
      },
      {
        model: {
          name: "AI_Matrix_ResNet152",
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
            confidence: 97,
          },
          {
            prediction: "Chicken",
            confidence: 1,
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
            prediction: "Dog",
            confidence: 0.5,
          }
        ]
      }
    ]
  }
};
