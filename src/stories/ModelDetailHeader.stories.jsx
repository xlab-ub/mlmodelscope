import React from 'react';

import ModelDetailHeader from "../components/ModelDetailPage/ModelDetailHeader";

export default {
  title: 'Models/Model Detail Header',
  component: ModelDetailHeader,
};

const Template = (args) => <ModelDetailHeader {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  key: 'key',
  model: {
    "id": 129,
    created_at: "2022-01-10T20:03:20.352408Z",
    updated_at: "2022-01-10T20:03:20.352408Z",
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
        {"name": "amd64"},
        {"name": "ILLIAC"},
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
      "type": "image_classification"
    },
    "version": "1.0"
  }
};

export const LongName = Template.bind({});
LongName.args = {
  key: 'long-named-model',
  model: {
    "id": 257,
    "attributes": {
      "Top1": "",
      "Top5": "",
      "kind": "CNN",
      "manifest_author": "Jingning Tang",
      "training_dataset": "COCO"
    },
    "description": "TensorFlow Object Detection model, which is trained on the COCO (Common Objects in Context) dataset. Use ssd_mobilenet_v1_ppn_shared_box_predictor_300x300_coco14_sync_2018_07_03 from TensorFlow detection model zoo.\n",
    "model": {
      "graph_checksum": "157acb6f72f214655252d59d5040be54",
      "graph_path": "https://s3.amazonaws.com/store.carml.org/models/tensorflow/models/ssd_mobilenet_v1_ppn_shared_box_predictor_300x300_coco14_sync_2018_07_03/frozen_inference_graph.pb",
      "weights_checksum": "",
      "weights_path": ""
    },
    "framework": {
      "id": 4,
      "name": "TensorFlow",
      "version": "1.14.0",
      "architectures": null
    },
    "input": {
      "description": "",
      "type": ""
    },
    "license": "Apache License, Version 2.0",
    "name": "SSD_MobileNet_v1_PPN_Shared_Box_Predictor_300x300_COCO14_Sync",
    "output": {
      "description": "the output bounding box",
      "type": "image_classification"
    },
    "version": "1.0"
  }
};

export const Modified = Template.bind({});
Modified.args = {
  key: 'key',
  model: {
    "id": 129,
    created_at: "2022-01-10T20:03:20.352408Z",
    updated_at: "2022-02-22T20:03:20.352408Z",
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
        {"name": "amd64"},
        {"name": "ILLIAC"},
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
      "type": "image_classification"
    },
    "version": "2.0"
  }
};
