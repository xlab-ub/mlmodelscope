import React, {useState} from 'react';
import crabby from "../../stories/assets/crabby.png";

import ExperimentDetailPage from "./ExperimentDetailPage";
import {
  TestObjectDetectionResult,
  TestObjectDetectionResult2,
  TestObjectDetectionResultNoBoundingBoxes
} from "../Experiment/QuickOutput/Outputs/ObjectDetection/testData/TestFeatures";
import {
  TestInstanceSegmentationOutput
} from "../Experiment/QuickOutput/Outputs/InstanceSegmentation/testData/TestFeatures";
import {
  TestImageClassificationResult,
  TestImageClassificationResult2
} from "../Experiment/QuickOutput/Outputs/Classification/Features";
import {TestImageEnhancementData} from "../Experiment/QuickOutput/Outputs/ImageEnhancement/testData/TestFeatures";
import {
  TestImageSegmentationResult
} from "../Experiment/QuickOutput/Outputs/SemanticSegmentation/testData/TestFeatures";
import {ExperimentDetailModalTypes} from "../../routes/ExperimentDetailContainer";
import Task from "../../helpers/Task";

export default {
  title: 'Experiments/Model Comparison Page',
  component: ExperimentDetailPage,
};

const MockContainer = (props) => {
  const trials = props.trials;
  const inputs = trials.filter((trial, idx, arr) => arr.findIndex(t => t.inputs[0] === trial.inputs[0]) === idx).map(tr => tr.inputs[0]);

  const [modalType, setModalType] = useState(ExperimentDetailModalTypes.none);
  const [selectedInput, setSelectedInput] = useState(inputs[0]);

  const makeExperiment = () => ({id: "1234567489", trials: trials.filter(trial => trial.inputs[0] === selectedInput)});
  const mockFn = () => {
  };
  const resetModal = () => setModalType(ExperimentDetailModalTypes.none);

  return <ExperimentDetailPage
    addInput={mockFn}
    deleteInput={mockFn}
    experiment={makeExperiment()}
    getAddModelsLink={mockFn}
    inputs={inputs}
    modalType={modalType}
    onCancelDeleteTrial={resetModal}
    onConfirmDeleteTrial={resetModal}
    onDeleteTrial={() => setModalType(ExperimentDetailModalTypes.confirmDeleteModel)}
    selectedInput={selectedInput}
    showAddInputModal={() => setModalType(ExperimentDetailModalTypes.addInput)}
    showDeleteInputModal={() => setModalType(ExperimentDetailModalTypes.confirmDeleteInput)}
    trialIsDeleting={false}
    trialToDelete={null}
    updateInput={(input) => setSelectedInput(input)}
    task={Task.image_classification}


  />

}


const Template = (args) => <MockContainer {...args} />;

export const ImageClassification = Template.bind({});
ImageClassification.args = {
  trials: [
    TestImageClassificationResult,
    TestImageClassificationResult
  ]
}

export const ImageClassificationManyResults = Template.bind({});
ImageClassificationManyResults.args = {
  trials: [
    TestImageClassificationResult,
    TestImageClassificationResult,
    TestImageClassificationResult,
    TestImageClassificationResult,
  ]
}

export const ImageClassificationPending = Template.bind({});
ImageClassificationPending.storyName = "Image Classification (Pending)";
ImageClassificationPending.args = {
  trials: [
    {
      model: {
        name: "TorchVision+ResNet18",
        framework: {
          name: "PyTorch",
          architectures: [
            {name: "amd64"}
          ]
        },
        output: {
          type: "image_classification"
        }
      },
      inputs: [
        crabby
      ],
      "results": {
        "responses": [
          {
            "features": [
              {
                "id": "61afb91c7cc38300018b8a74",
                "probability": 0.74689136,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 933,
                  "label": "n07697313 cat"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a75",
                "probability": 0.038271908,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 934,
                  "label": "n07697537 hotdog, hot dog, red hot"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a91",
                "probability": 0.03022722,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 962,
                  "label": "n07871810 chicken"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6b",
                "probability": 0.028421086,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 924,
                  "label": "n07583066 tigershark, tiger shark"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a94",
                "probability": 0.022437122,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 965,
                  "label": "n07880968 burrito"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a78",
                "probability": 0.02237846,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 937,
                  "label": "n07714990 broccoli"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a5c",
                "probability": 0.0140902875,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 909,
                  "label": "n04596742 wok"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a72",
                "probability": 0.013454436,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 931,
                  "label": "n07693725 bagel, beigel"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6e",
                "probability": 0.011039594,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 927,
                  "label": "n07613480 trifle"
                }
              }
            ],
          }
        ],
        "trace_id": {
          "id": "bb4e4303f41083c"
        }
      }
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
      "results": {
        "responses": [
          {
            "features": [
              {
                "id": "61afb91c7cc38300018b8a74",
                "probability": 0.64689136,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 933,
                  "label": "n07697313 cheeseburger"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a75",
                "probability": 0.08022722,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 934,
                  "label": "n07697537 hotdog, hot dog, red hot"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a91",
                "probability": 0.078421086,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 962,
                  "label": "n07871810 meat loaf, meatloaf"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6b",
                "probability": 0.038271908,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 924,
                  "label": "n07583066 guacamole"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a94",
                "probability": 0.022437122,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 965,
                  "label": "n07880968 burrito"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a78",
                "probability": 0.02237846,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 937,
                  "label": "n07714990 broccoli"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a5c",
                "probability": 0.0140902875,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 909,
                  "label": "n04596742 wok"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a72",
                "probability": 0.013454436,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 931,
                  "label": "n07693725 bagel, beigel"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6e",
                "probability": 0.011039594,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 927,
                  "label": "n07613480 trifle"
                }
              }
            ],
          }
        ],
        "trace_id": {
          "id": "bb4e4303f41083c"
        }
      },
      inputs: [
        crabby
      ],

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
      "results": {
        "responses": [
          {
            "features": [
              {
                "id": "61afb91c7cc38300018b8a74",
                "probability": 0.64689136,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 933,
                  "label": "n07697313 cheeseburger"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a75",
                "probability": 0.08022722,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 934,
                  "label": "n07697537 hotdog, hot dog, red hot"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a91",
                "probability": 0.078421086,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 962,
                  "label": "n07871810 meat loaf, meatloaf"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6b",
                "probability": 0.038271908,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 924,
                  "label": "n07583066 guacamole"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a94",
                "probability": 0.022437122,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 965,
                  "label": "n07880968 burrito"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a78",
                "probability": 0.02237846,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 937,
                  "label": "n07714990 broccoli"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a5c",
                "probability": 0.0140902875,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 909,
                  "label": "n04596742 wok"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a72",
                "probability": 0.013454436,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 931,
                  "label": "n07693725 bagel, beigel"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6e",
                "probability": 0.011039594,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 927,
                  "label": "n07613480 trifle"
                }
              }
            ],
          }
        ],
        "trace_id": {
          "id": "bb4e4303f41083c"
        }
      },
      inputs: [
        crabby
      ],

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
      "results": {
        "responses": [
          {
            "features": [
              {
                "id": "61afb91c7cc38300018b8a74",
                "probability": 0.64689136,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 933,
                  "label": "n07697313 cheeseburger"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a75",
                "probability": 0.08022722,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 934,
                  "label": "n07697537 hotdog, hot dog, red hot"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a91",
                "probability": 0.078421086,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 962,
                  "label": "n07871810 meat loaf, meatloaf"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6b",
                "probability": 0.038271908,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 924,
                  "label": "n07583066 guacamole"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a94",
                "probability": 0.022437122,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 965,
                  "label": "n07880968 burrito"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a78",
                "probability": 0.02237846,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 937,
                  "label": "n07714990 broccoli"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a5c",
                "probability": 0.0140902875,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 909,
                  "label": "n04596742 wok"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a72",
                "probability": 0.013454436,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 931,
                  "label": "n07693725 bagel, beigel"
                }
              },
              {
                "id": "61afb91c7cc38300018b8a6e",
                "probability": 0.011039594,
                "type": "CLASSIFICATION",
                "classification": {
                  "index": 927,
                  "label": "n07613480 trifle"
                }
              }
            ],
          }
        ],
        "trace_id": {
          "id": "bb4e4303f41083c"
        }
      },
      inputs: [
        crabby
      ],

    }
  ]
}


export const ImageClassificationMultipleInputs = Template.bind({});
ImageClassificationMultipleInputs.storyName = "Image Classification (Multiple Inputs)";
ImageClassificationMultipleInputs.args = {
  trials: [
    TestImageClassificationResult,
    TestImageClassificationResult,
    TestImageClassificationResult2,
    TestImageClassificationResult2

  ]
}

export const ObjectDetection = Template.bind({});
ObjectDetection.args = {
  trials: [
    TestObjectDetectionResult,
    TestObjectDetectionResult
  ]
}

export const ObjectDetectionMultipleInputs = Template.bind({});
ObjectDetectionMultipleInputs.storyName = "Object Detection (Multiple Inputs)";
ObjectDetectionMultipleInputs.args = {
  trials: [
    TestObjectDetectionResult,
    TestObjectDetectionResult,
    TestObjectDetectionResult2,
    TestObjectDetectionResult2,
    TestObjectDetectionResultNoBoundingBoxes,
    TestObjectDetectionResultNoBoundingBoxes,
  ]
}

export const InstanceSegmentation = Template.bind({});
InstanceSegmentation.args = {
  trials: [
    TestInstanceSegmentationOutput,
    TestInstanceSegmentationOutput
  ]
}


export const ImageEnhancement = Template.bind({});

ImageEnhancement.args = {
  trials: [
    TestImageEnhancementData,
    TestImageEnhancementData
  ]
}


export const SemanticSegmentation = Template.bind({});

SemanticSegmentation.args = {
  trials: [
    TestImageSegmentationResult,
    TestImageSegmentationResult
  ]
}



