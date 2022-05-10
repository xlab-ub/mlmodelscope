import React from 'react';

import ModelDetailPage from "./ModelDetailPage";
import kitty from "../../stories/assets/kitty.png";
import {image_enhancement, object_detection, semantic_segmentation} from "../../helpers/TaskIDs";

export default {
  title: 'Models/Model Detail Page',
  component: ModelDetailPage,
};

const Template = (args) => <ModelDetailPage {...args} />;

const makeArgs = (type) => ({
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
      "type": type
    },
    "version": "2.22",
    "url": {
      "citation": "https://github.com",
      "github": "https://github.com",
      "link1": "https://pytorch.org/vision/stable/models.html",
      "link2": "https://pytorch.org/vision/stable/models.html"
    }
  }
})


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
      "type": "image_classification"
    },
    "version": "2.22",
    "url": {
      "citation": "https://github.com",
      "github": "https://github.com",
      "link1": "https://pytorch.org/vision/stable/models.html",
      "link2": "https://pytorch.org/vision/stable/models.html"
    }
  }
}

export const WithTrialOutput = Template.bind({});
WithTrialOutput.args = {
  key: "ModelDetailPageWithTrialOutput",
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
      "type": "image_classification"
    },
    "version": "2.22",
    "url": {
      "citation": "https://github.com",
      "github": "https://github.com",
      "link1": "https://pytorch.org/vision/stable/models.html",
      "link2": "https://pytorch.org/vision/stable/models.html"
    }
  },
  trialOutput: {
    "id": "7618d464-b5ed-432f-8f88-b33504c6bb0a",
    "inputs": [kitty],
    "completed_at": "2022-03-10T16:26:26.267137Z",
    "results": {
      "responses": [
        {
          "features": [
            {
              "id": "61afb91c7cc38300018b8a74",
              "probability": 0.64689136,
              "type": "CLASSIFICATION",
              "classification": {"index": 933, "label": "n07697313 cheeseburger"}
            }, {
              "id": "61afb91c7cc38300018b8a75",
              "probability": 0.08022722,
              "type": "CLASSIFICATION",
              "classification": {"index": 934, "label": "n07697537 hotdog, hot dog, red hot"}
            }, {
              "id": "61afb91c7cc38300018b8a91",
              "probability": 0.078421086,
              "type": "CLASSIFICATION",
              "classification": {"index": 962, "label": "n07871810 meat loaf, meatloaf"}
            }, {
              "id": "61afb91c7cc38300018b8a6b",
              "probability": 0.038271908,
              "type": "CLASSIFICATION",
              "classification": {"index": 924, "label": "n07583066 guacamole"}
            }, {
              "id": "61afb91c7cc38300018b8a94",
              "probability": 0.022437122,
              "type": "CLASSIFICATION",
              "classification": {"index": 965, "label": "n07880968 burrito"}
            }, {
              "id": "61afb91c7cc38300018b8a78",
              "probability": 0.02237846,
              "type": "CLASSIFICATION",
              "classification": {"index": 937, "label": "n07714990 broccoli"}
            }, {
              "id": "61afb91c7cc38300018b8a5c",
              "probability": 0.0140902875,
              "type": "CLASSIFICATION",
              "classification": {"index": 909, "label": "n04596742 wok"}
            }, {
              "id": "61afb91c7cc38300018b8a72",
              "probability": 0.013454436,
              "type": "CLASSIFICATION",
              "classification": {"index": 931, "label": "n07693725 bagel, beigel"}
            }, {
              "id": "61afb91c7cc38300018b8a6e",
              "probability": 0.011039594,
              "type": "CLASSIFICATION",
              "classification": {"index": 927, "label": "n07613480 trifle"}
            }, {
              "id": "61afb91c7cc38300018b8a80",
              "probability": 0.0076882984,
              "type": "CLASSIFICATION",
              "classification": {"index": 945, "label": "n07720875 bell pepper"}
            }, {
              "id": "61afb91c7cc38300018b8a6d",
              "probability": 0.005878217,
              "type": "CLASSIFICATION",
              "classification": {"index": 926, "label": "n07590611 hot pot, hotpot"}
            }]
        }], "trace_id": {"id": "bb4e4303f41083c"}
    },
    model: {
      output: {
        type: "image_classification"
      }
    }
  }
}

export const WithPendingTrialOutput = Template.bind({});
WithPendingTrialOutput.args = {
  key: "ModelDetailPageWithPendingTrialOutput",
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
      "type": "image_classification"
    },
    "version": "2.22",
    "url": {
      "citation": "https://github.com",
      "github": "https://github.com",
      "link1": "https://pytorch.org/vision/stable/models.html",
      "link2": "https://pytorch.org/vision/stable/models.html"
    }
  },
  trialOutput: {
    "id": "7618d464-b5ed-432f-8f88-b33504c6bb0a",
    "inputs": [kitty],
  }
}

export const ObjectDetection = Template.bind({});
ObjectDetection.args = makeArgs(object_detection);

export const SemanticSegmentation = Template.bind({});
SemanticSegmentation.args = makeArgs(semantic_segmentation);

export const ImageEnhancement = Template.bind({});
ImageEnhancement.args = makeArgs(image_enhancement);

export const InstanceSegmentation = Template.bind({});
InstanceSegmentation.args = makeArgs("image_instance_segmentation");
