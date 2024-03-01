import {
  image_classification,
  image_enhancement,
  instance_segmentation,
  object_detection,
  semantic_segmentation,
  textToText,
  textToCode,
  videoClassification
} from "./TaskIDs";
import React from "react";
import { ReactComponent as ImageClassification } from "../resources/icons/icon-imageClassification.svg";
import { ReactComponent as ObjectDetection } from "../resources/icons/icon-objectDetection.svg";
import { ReactComponent as SemanticSegmentation } from "../resources/icons/icon-semanticSegmentation.svg";
import { ReactComponent as InstanceSegmentation } from "../resources/icons/icon-instanceSegmentation.svg";
import { ReactComponent as ImageEnhancement } from "../resources/icons/icon-imageEnhancement.svg";
import { ReactComponent as VideoClassification } from "../resources/icons/icon-videoClassification.svg";
import {
  DefaultImageClassificationModel,
  DefaultImageEnhancementModel,
  DefaultInstanceSegmentationModel,
  DefaultObjectDetectionModel,
  DefaultSemanticSegmentationModel,
  DefaultTextModel,
} from "./DefaultModels";
import {
  SampleImageClassificationInputs,
  SampleImageEnhancementInputs,
  SampleObjectDetectionInputs,
  SampleSegmentationInputs,
  SampleVideoInputs,
} from "./sampleImages";
import { TestImageClassificationResult } from "../components/Experiment/QuickOutput/Outputs/Classification/Features";
import { TestImageEnhancementData } from "../components/Experiment/QuickOutput/Outputs/ImageEnhancement/testData/TestFeatures";
import { TestObjectDetectionResult } from "../components/Experiment/QuickOutput/Outputs/ObjectDetection/testData/TestFeatures";
import { TestImageSegmentationResult } from "../components/Experiment/QuickOutput/Outputs/SemanticSegmentation/testData/TestFeatures";
import { TestInstanceSegmentationOutput } from "../components/Experiment/QuickOutput/Outputs/InstanceSegmentation/testData/TestFeatures";
import { TestTextOutput } from "../components/Experiment/QuickOutput/Outputs/Text/testData/testTextOutput";
import { TaskInputTypes } from "./TaskInputTypes";

export default class Task {
  static image_classification = new Task({
    name: "Classification",
    description:
      "Used to recognize a single object in an image and can help you answer what is in the image.",
    modelDescription:
      "Used to recognize a single object in an image and can help you answer what is in the image.",
    id: image_classification,
    inputText: "See how well this model can identify the object.",
    outputText: "How this model identified the object in this image:",
    icon: (props) => <ImageClassification {...props} />,
    sampleInputs: SampleImageClassificationInputs,
    tutorialDescription:
      "Image classification models can recognize a single object in an image.",
  });
  static video_classification = new Task({
    name: "Video Classification",
    description:
      "Used for automated categorization of video inputs.",
    modelDescription:
    "Used for automated categorization of video inputs.",
    id: videoClassification,
    inputText: "See how well this model can categorize a video.",
    outputText: "Class labels for the input video:",
    icon: (props) => <VideoClassification {...props} />,
    inputType: TaskInputTypes.Video,
    sampleInputs: SampleVideoInputs,
    tutorialDescription:
      "Video classification models can recognize a single object in an image.",
  });
  static click_through_rate = new Task({
    name: "Click-Through Rate",
    description: "[insert click-through rate description here]",
  });
  static image_object_detection = new Task({
    name: "Object detection",
    description:
      "Used to recognize and locate multiple objects in an image (for example, humans, animals, cars), and can help you answer what is in the image and where in the image is it located.",
    id: object_detection,
    inputText:
      "See how well this model can recognize and locate multiple objects in an image.",
    outputText: "Objects recognized in this image:",
    icon: (props) => <ObjectDetection {...props} />,
    sampleInputs: SampleObjectDetectionInputs,
    tutorialDescription:
      "Object detection models identify where objects are in an image.",
  });
  static image_semantic_segmentation = new Task({
    name: "Semantic segmentation",
    description:
      "Used to segment out different parts of an image that belong to the same class. Can help you answer what is in the image, where in the image it is located, and if similar object overlap.",
    id: semantic_segmentation,
    inputText:
      "See how well this model can recognize and locate multiple objects in an image and where they overlap.",
    outputText: "Objects recognized in this image:",
    icon: (props) => <SemanticSegmentation {...props} />,
    sampleInputs: SampleSegmentationInputs,
    tutorialDescription:
      "Semantic segmentation models recognize categories of objects in an image. They assign a category to every pixel in an image.",
  });
  static image_instance_segmentation = new Task({
    name: "Instance segmentation",
    description:
      "Used to segment out every distinct object in an image. Can help you answer what is in the image, where in the image it is located, and how many distinct objects there are.",
    inputText:
      "See how well this model can recognize and locate multiple distinct objects in an image.",
    outputText: "Objects recognized in this image:",
    icon: (props) => <InstanceSegmentation {...props} />,
    sampleInputs: SampleSegmentationInputs,
    tutorialDescription:
      "Instance Segmentation models recognize very specific categories of objects in an image. They assign a category to every pixel in an image.",
    id: instance_segmentation,
  });
  static image_enhancement = new Task({
    name: "Image enhancement",
    description:
      "Used to sharpen an image and bring out details. Can help you focus or pick out important features in an image.",
    id: image_enhancement,
    inputText: "See how well this model can improve the details of an image.",
    outputText: "Enhanced image:",
    icon: (props) => <ImageEnhancement {...props} />,
    sampleInputs: SampleImageEnhancementInputs,
    tutorialDescription:
      "Image enhancement models improve the resolution of an image, making it crisper and clearer.",
  });
  static text = new Task({
    name: "Text to Text",
    description: "[insert text description here]",
    id: textToText,
    inputText: "[insert text input help text here]",
    outputText: "[insert text output help text here]",
    icon: (props) => <></>,
    sampleInputs: [],
    tutorialDescription: "[insert text tutorial page description here]",
    inputType: TaskInputTypes.Text,
  });
  static text_to_code = new Task({
    name: "Text to Code",
    description: "[insert text to code description here]",
    id: textToCode,
    inputText: "[insert text to code input help text here]",
    outputText: "[insert text to code output help text here]",
    icon: (props) => <></>,
    sampleInputs: [],
    tutorialDescription: "[insert text to code tutorial page description here]",
    inputType: TaskInputTypes.Text,
  });

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
    this.tutorialDescription = options.tutorialDescription ?? this.description;
    this.inputType = options.inputType ?? TaskInputTypes.Image;
  }

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
      case textToText:
        return Task.text;
      case textToCode:
        return Task.text_to_code;
      case videoClassification:
        return Task.video_classification;

      default:
        return new Task({ name: "unknown", description: "unknown task name" });
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
      case instance_segmentation:
        return DefaultInstanceSegmentationModel;
      case textToText:
        return DefaultTextModel;
      case videoClassification:
        return DefaultImageClassificationModel;

      default:
        return undefined;
    }
  }

  static getSampleOutput(taskId) {
    switch (taskId) {
      case image_classification:
        return TestImageClassificationResult;
      case image_enhancement:
        return TestImageEnhancementData;
      case object_detection:
        return TestObjectDetectionResult;
      case semantic_segmentation:
        return TestImageSegmentationResult;
      case instance_segmentation:
        return TestInstanceSegmentationOutput;
      case textToText:
        return TestTextOutput;
      
    }
  }

  static getStaticTasks() {
    return [
      this.getStaticTask(image_classification),
      this.getStaticTask(object_detection),
      this.getStaticTask(image_enhancement),
      this.getStaticTask(semantic_segmentation),
      this.getStaticTask(instance_segmentation),
      this.getStaticTask(textToText),
      this.getStaticTask(textToCode),
      this.getStaticTask(videoClassification),
    ];
  }

  static getDemoTasks() {
    return [
      this.getStaticTask(image_classification),
      this.getStaticTask(object_detection),
      this.getStaticTask(image_enhancement),
      this.getStaticTask(semantic_segmentation),
      this.getStaticTask(instance_segmentation),
      this.getStaticTask(textToText),
      this.getStaticTask(videoClassification),
    ];
  }
}
