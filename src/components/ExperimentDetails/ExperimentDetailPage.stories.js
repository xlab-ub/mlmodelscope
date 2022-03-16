import React from 'react';
import crabby from "../../stories/assets/crabby.png";

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
            type: "classification"
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
                  "probability": 0.03022722,
                  "type": "CLASSIFICATION",
                  "classification": {
                    "index": 934,
                    "label": "n07697537 hotdog, hot dog, red hot"
                  }
                },
                {
                  "id": "61afb91c7cc38300018b8a91",
                  "probability": 0.038271908,
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
        }
      }
    ]
  }
};
