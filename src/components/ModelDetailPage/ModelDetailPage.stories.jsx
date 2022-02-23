import React from 'react';

import ModelDetailPage from "./ModelDetailPage";

export default {
  title: 'Models/Model Detail Page',
  component: ModelDetailPage,
};

const Template = (args) => <ModelDetailPage {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  key: "StandardModelDetailPage",
  model: {
    "id": 13,
    "created_at": "2022-01-10T20:03:19.910198Z",
    "updated_at": "2022-01-10T20:03:19.910198Z",
    "attributes": {
      "Top1": "78.56",
      "Top5": "94.43",
      "kind": "CNN",
      "manifest_author": "Cheng Li",
      "training_dataset": "ImageNet"
    },
    "description": "This is a made up example of a model that supports multiple machines\n",
    "model": {
      "graph_checksum": "",
      "graph_path": "model-symbol.json",
      "weights_checksum": "",
      "weights_path": "model-0000.params"
    },
    "framework": {
      "id": 1,
      "name": "MXNet",
      "version": "1.7.0",
      "architectures": [
        {
          "name": "amd64"
        },
        {
          "name": "ILLIAC"
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "Fakenet22",
    "output": {
      "description": "the output label",
      "type": "classification"
    },
    "version": "2.22"
  }
}
