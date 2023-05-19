import React from 'react';
import useBEMNaming from "../../../../common/useBEMNaming";
import ClassificationOutput from "../../../Experiment/QuickOutput/Outputs/Classification/ClassificationOutput";
import {ReactComponent as GreenArrow} from "../../../../resources/icons/green-arrow.svg";
import {ReactComponent as InfoIcon} from "../../../../resources/icons/info-icon.svg";
import "./IntroTutorialPlantOutput.scss";

export default function IntroTutorialPlantOutput(props) {
    const {getElement} = useBEMNaming("intro-tutorial-plant-output");


    return <>
        <p className={getElement("intro-text")}>Model Output</p>
        <p className={getElement("title")}>It can!</p>

        <ClassificationOutput
            trial={
                {
                    "id": "f5b958a7-61ba-4553-a7df-7968e44f605d",
                    "inputs": [
                        "https://s3.amazonaws.com/uploads.staging.mlmodelscope.org/birdy.png"
                    ],
                    "completed_at": "2022-04-22T13:35:25.914145Z",
                    "results": {
                        "duration": "492.161067ms",
                        "duration_for_inference": "368.568412ms",
                        "responses": [
                            {
                                "features": []
                            }
                        ],
                        "trace_id": {}
                    },
                    "model": {
                        "id": 1,
                        "created_at": "2022-04-20T15:24:52.257624Z",
                        "updated_at": "2022-04-20T15:24:52.257624Z",
                        "attributes": {
                            "Top1": "54.92",
                            "Top5": "78.03",
                            "kind": "CNN",
                            "manifest_author": "Cheng Li",
                            "training_dataset": "ImageNet"
                        },
                        "description": "MXNet Image Classification model, which is trained on the ImageNet dataset. Use AlexNet from GluonCV model zoo.\n",
                        "short_description": "AlexNet is one of the earliest convolutional neural network for image classification. The pretrained network can classify images into 1000 object categories, such as keyboard, mouse, pencil, and many animals.",
                        "model": {
                            "graph_checksum": "4abd57ec8863ff3e3e29ecd4ead43d1f",
                            "graph_path": "model-symbol.json",
                            "weights_checksum": "906234b2a6b14bedac2dcccba8178529",
                            "weights_path": "model-0000.params"
                        },
                        "framework": {
                            "id": 1,
                            "name": "MXNet",
                            "version": "1.7.0",
                            "architectures": [
                                {
                                    "name": "amd64"
                                }
                            ]
                        },
                        "input": {
                            "description": "",
                            "type": ""
                        },
                        "license": "unrestricted",
                        "name": "AlexNet_something_really_really_really_really_long",
                        "output": {
                            "description": "the output label",
                            "type": "image_classification"
                        },
                        "url": {
                            "github": "https://github.com/apache/incubator-mxnet/blob/master/python/mxnet/gluon/model_zoo/vision/alexnet.py",
                            "citation": "https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf",
                            "link1": "",
                            "link2": ""
                        },
                        "version": "1.0"
                    }
                }
            }
            features={[
                {
                    classification: {
                        index: 1,
                        label: "n1111 Snake Plant"
                    },
                    probability: 0.90
                },
                {
                    classification: {
                        index: 2,
                        label: "n1112 Money Tree"
                    },
                    probability: 0.07
                },
                {
                    classification: {
                        index: 3,
                        label: "n1113 Bamboo Plant"
                    },
                    probability: 0.02
                }
            ]}
            hideRating
            hideDuration
        />

        <div className={getElement("explanation")}>
            <GreenArrow className={getElement("explanation-arrow")}/>
            <InfoIcon className={getElement("explanation-info")}/>
            <p className={getElement("explanation-text")}>
                This is the model output. It shows the model's predictions for objects displayed in the image. This
                machine
                learning model is 90% sure this is an image of a Snake Plant, which is accurate.
            </p>
        </div>

        <button className={getElement("cta")} onClick={() => props.goToSection(props.index + 1)}>
            How is a model able to do this?
        </button>
    </>
}
