import catDog from '../../../../../../stories/assets/catdog.jpg';

export const TestBoundingBox = {
  "bounding_box": {
    "index": 15,
    "label": "cat",
    "xmax": 352.969,
    "xmin": 85.00500012,
    "ymax": 245.986,
    "ymin": 30.984,
    color: {
      className: "test-class-1",
      font: "#ffffff",
      background: "#123456"
    }
  },
  "id": "61a67f3e065391000171cf2a",
  "probability": 0.35077477,
  "type": "BOUNDINGBOX"
};

export const TestBoundingBox2 = {
  "bounding_box": {
    "index": 15,
    "label": "dog",
    "xmax": 52.969,
    "xmin": 5.00500012,
    "ymax": 45.986,
    "ymin": 20.984,
    color: {
      className: "test-class-1",
      background: "#654321",
      font: "#ffffff"
    }
  },
  "id": "61a67f3e065391000171cf2a",
  "probability": 0.35077477,
  "type": "BOUNDINGBOX"
}

export const TestObjectDetectionResult = {
  completed_at: '2022-04-19T16:19:38.616395Z',
  inputs: [
    catDog
  ],
  model: {
    framework: {
      architectures: [
        {
          name: 'amd64'
        }
      ],
      name: 'PyTorch'
    },
    id: 27,
    name: 'TorchVision+ResNet18'
  },
  "id": "091ee87a-3e30-44a4-91f5-d113bccecd4e",
  results: {
    responses: [
      {
        features: [
          {
            "bounding_box": {
              "index": 15,
              "label": "dog",
              "xmax": 280.969,
              "xmin": 70.00500012,
              "ymax": 395.986,
              "ymin": 28.984,

            },
            "id": "61a67f3e065391000171cf2a",
            "probability": 0.35077477,
            "type": "BOUNDINGBOX"
          },
          {
            "bounding_box": {
              "index": 15,
              "label": "cat",
              "xmax": 210.969,
              "xmin": 355.00500012,
              "ymax": 395.986,
              "ymin": 30.984,
            },
            "id": "61a67f3e065391000171cf2a",
            "probability": 0.75077477,
            "type": "BOUNDINGBOX"
          }
        ],
        "id": "b684795b-32e4-49cb-a3ec-cee16ba942af",
        "input_id": "47e8f34f-378e-4900-b155-4f0616621970",
        "request_id": "0cc6a5b0-08a5-4c8b-9244-e70980986192"
      }
    ],
    "trace_id": {
      "id": "1dec0319292fd46b"
    }
  },
}
