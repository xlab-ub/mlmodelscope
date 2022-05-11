import {image_classification, image_enhancement, object_detection, semantic_segmentation} from "./TaskIDs";


export default class Task {
  static image_classification = new Task({
    name: "Classification",
    description: "Used to recognize a single object in an image and can help you answer what is in the image",
    modelDescription: "Used to recognize a single object in an image and can help you answer what is in the image",
    id: image_classification,
    inputText: "See how well this model can identify what object is in an image.",
    outputText: "How this model identified the object in this image:"
  })
  static click_through_rate = new Task({
    name: "Click-Through Rate",
    description: "[insert click-through rate description here]"
  })
  static image_object_detection = new Task({
    name: "Object Detection",
    description: "Used to recognize and locate multiple objects in an image (for example, humans, animals, cars) and can help you answer what is in the image and where in the image is it located",
    id: object_detection,
    inputText: "See how well this model can recognize and locate multiple objects in an image.",
    outputText: "Objects this model can recognize in this image:"
  })
  static image_semantic_segmentation = new Task({
    name: "Semantic Segmentation",
    description: "Used to segment out different parts of an image that belong to the same class. Can help you answer what is in the image, where in the image is it located, and if similar object overlap",
    id: semantic_segmentation,
    inputText: "See how well this model can recognize and locate multiple objects in an image and where they overlap.",
    outputText: "Objects this model can recognize in this image:"
  })
  static image_instance_segmentation = new Task({
    name: "Instance Segmentation",
    description: "Used to segment out every distinct object in an image. Can help you answer what is in the image, where in the image it is located, and how many distinct objects there are.",
    inputText: "See how well this model can recognize and locate multiple distinct objects in an image.",
    outputText: "Objects this model can recognize in this image:"
  })
  static image_enhancement = new Task({
    name: 'Image Enhancement',
    description: 'Used to sharpen an image and bring out details. Can help you focus or pick out important features in an image.',
    id: image_enhancement,
    inputText: "See how well this model can improve the details of an image.",
    outputText: "How this model improved the details in this image:"
  });

  static getStaticTask(taskName) {
    switch (taskName) {
      case image_classification:
        return Task.image_classification;
      case image_enhancement:
        return Task.image_enhancement;
      case object_detection:
        return Task.image_object_detection;
      case semantic_segmentation:
        return Task.image_semantic_segmentation;
      default:
        return new Task({name: "unknown", description: "unknown task name"});
    }
  }

  constructor(options) {
    this.name = options.name ?? "";
    this.id = options.id ?? this.name;
    this.description = options.description ?? "";
    this.modelDescription = options.modelDescription ?? this.description;
    this.inputText = options.inputText ?? "";
    this.outputText = options.outputText ?? "";
  }

}
