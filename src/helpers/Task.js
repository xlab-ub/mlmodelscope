import {
  image_classification,
  image_enhancement,
  instance_segmentation,
  object_detection,
  semantic_segmentation
} from "./TaskIDs";
import React from 'react';
import {ReactComponent as ImageClassification} from "../resources/icons/icon-imageClassification.svg";
import {ReactComponent as ObjectDetection} from "../resources/icons/icon-objectDetection.svg";
import {ReactComponent as SemanticSegmentation} from "../resources/icons/icon-semanticSegmentation.svg";
import {ReactComponent as InstanceSegmentation} from "../resources/icons/icon-instanceSegmentation.svg";
import {ReactComponent as ImageEnhancement} from "../resources/icons/icon-imageEnhancement.svg";
import {
  DefaultImageClassificationModel,
  DefaultImageEnhancementModel,
  DefaultObjectDetectionModel,
  DefaultSemanticSegmentationModel
} from "./DefaultModels";
import {
  SampleImageClassificationInputs,
  SampleImageEnhancementInputs,
  SampleObjectDetectionInputs,
  SampleSegmentationInputs
} from "./sampleImages";


export default class Task {
  static image_classification = new Task({
    name: "Classification",
    description: "Used to recognize a single object in an image and can help you answer what is in the image.",
    modelDescription: "Used to recognize a single object in an image and can help you answer what is in the image.",
    id: image_classification,
    inputText: "See how well this model can identify what object is in an image.",
    outputText: "How this model identified the object in this image:",
    icon: (props) => <ImageClassification {...props}/>,
    sampleInputs: SampleImageClassificationInputs,
    homePageDescription: "Image Classification models can recognize a single object in an image."
  })
  static click_through_rate = new Task({
    name: "Click-Through Rate",
    description: "[insert click-through rate description here]"
  })
  static image_object_detection = new Task({
    name: "Object Detection",
    description: "Used to recognize and locate multiple objects in an image (for example, humans, animals, cars), and can help you answer what is in the image and where in the image is it located.",
    id: object_detection,
    inputText: "See how well this model can recognize and locate multiple objects in an image.",
    outputText: "Objects this model can recognize in this image:",
    icon: (props) => <ObjectDetection {...props}/>,
    sampleInputs: SampleObjectDetectionInputs,
    homePageDescription: "Object Detection models are used to identify where a set of objects is in an image"
  })
  static image_semantic_segmentation = new Task({
    name: "Semantic Segmentation",
    description: "Used to segment out different parts of an image that belong to the same class. Can help you answer what is in the image, where in the image it is located, and if similar object overlap.",
    id: semantic_segmentation,
    inputText: "See how well this model can recognize and locate multiple objects in an image and where they overlap.",
    outputText: "Objects this model can recognize in this image:",
    icon: (props) => <SemanticSegmentation {...props} />,
    sampleInputs: SampleSegmentationInputs,
    homePageDescription: "Semantic Segmentation models recognize categories of objects in an image. They assign a category to every pixel in an image."
  })
  static image_instance_segmentation = new Task({
    name: "Instance Segmentation",
    description: "Used to segment out every distinct object in an image. Can help you answer what is in the image, where in the image it is located, and how many distinct objects there are.",
    inputText: "See how well this model can recognize and locate multiple distinct objects in an image.",
    outputText: "Objects this model can recognize in this image:",
    icon: (props) => <InstanceSegmentation {...props}/>,
    sampleInputs: SampleSegmentationInputs,
    homePageDescription: "Instance Segmentation models recognize very specific categories of objects in an image. They assign a category to every pixel in an image."
  })
  static image_enhancement = new Task({
    name: 'Image Enhancement',
    description: 'Used to sharpen an image and bring out details. Can help you focus or pick out important features in an image.',
    id: image_enhancement,
    inputText: "See how well this model can improve the details of an image.",
    outputText: "How this model improved the details in this image:",
    icon: (props) => <ImageEnhancement {...props}/>,
    sampleInputs: SampleImageEnhancementInputs,
    homePageDescription: "Image Enhancement models improve the resolution of an image, making it crisper and clearer."
  });

  static getStaticTask(taskId) {
    switch (taskId) {
      case image_classification:
      case Task.image_classification.name:
        return Task.image_classification;
      case image_enhancement:
      case Task.image_enhancement.name:
        return Task.image_enhancement;
      case object_detection:
      case Task.image_object_detection.name:
        return Task.image_object_detection;
      case semantic_segmentation:
      case Task.image_semantic_segmentation.name:
        return Task.image_semantic_segmentation;
      case instance_segmentation:
      case Task.image_instance_segmentation.name:
        return Task.image_instance_segmentation;
      default:
        return new Task({name: "unknown", description: "unknown task name"});
    }
  }

  static getDefaultModel(taskId) {
    switch (taskId) {
      case image_classification:
        return DefaultImageClassificationModel;
      case image_enhancement:
        return DefaultImageEnhancementModel;
      case object_detection:
        return DefaultObjectDetectionModel;
      case semantic_segmentation:
        return DefaultSemanticSegmentationModel;

      default:
        return undefined;
    }
  }


  static getStaticTasks() {
    return [
      this.getStaticTask(image_classification),
      this.getStaticTask(object_detection),
      this.getStaticTask(image_enhancement),
      this.getStaticTask(semantic_segmentation),
    ]
  }

  constructor(options) {
    this.name = options.name ?? "";
    this.id = options.id ?? this.name;
    this.description = options.description ?? "";
    this.modelDescription = options.modelDescription ?? this.description;
    this.inputText = options.inputText ?? "";
    this.outputText = options.outputText ?? "";
    this.Icon = options.icon ?? ((props) => <></>);
    this.defaultModel = Task.getDefaultModel(this.id);
    this.sampleInputs = options.sampleInputs ?? [];
    this.homePageDescription = options.homePageDescription ?? this.description;

  }


}
