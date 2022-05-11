import React from "react";
import SelectedModelCard from "../components/ModelList/SelectedModelCard";

export default {
  title: 'Components/Selected Model Card',
  component: SelectedModelCard,
}

const Template = (args) => <SelectedModelCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  key: 'key',
  model: {
    "id": 129,
    "attributes": {
      "Top1": "",
      "Top5": "",
      "kind": "CNN",
      "manifest_author": "Yen-Hsiang Chang",
      "training_dataset": "ImageNet"
    },
    "description": "The pre-trained model expects input in mini-batches of 3-channel RGB images of shape (3 x H x W), where H and W are expected to be 229. The images have to be loaded in to a range of [0, 1] and then normalized using mean = [0.5, 0.5, 0.5] and std = [0.5, 0.5, 0.5]\n",
    "model": {
      "graph_checksum": "608d5b80fd6119e5ec19b3dd3d217167",
      "graph_path": "https://s3.amazonaws.com/store.carml.org/models/onnxruntime/xception-imagenet.onnx",
      "weights_checksum": "",
      "weights_path": ""
    },
    "framework": {
      "id": 2,
      "name": "Onnxruntime",
      "version": "1.6.0",
      "architectures": [
        {
          "name": "amd64",
        }
      ]
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "unrestricted",
    "name": "Xception",
    "output": {
      "description": "the output label",
      "type": "classification"
    },
    "version": "1.0"
  }
}
