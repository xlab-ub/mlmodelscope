export default class Task {
  static image_classification = new Task('Classification', 'Used to recognize a single object in an image and can help you answer what is in the image', 'Used to recognize a single object in an image and can help you answer what is in the image');
  static clickthroughrate = new Task('Click-Through Rate', '[insert click-through rate description here]');
  static image_object_detection = new Task('Object Detection', 'Used to recognize and locate multiple objects in an image (for example, humans, animals, cars) and can help you answer what is in the image and where in the image is it located');
  static image_semantic_segmentation = new Task('Semantic Segmentation', 'Used to segment out different parts of an image that belong to the same class. Can help you answer what is in the image, where in the image is it located, and if similar object overlap');
  static image_instance_segmentation = new Task('Instance Segmentation', 'Used to segment out every distinct object in an image. Can help you answer what is in the image, where in the image it is located, and how many distinct objects there are.');
  static image_enhancement = new Task('Image Enhancement', 'Used to sharpen an image and bring out details. Can help you focus or pick out important features in an image.');

  constructor(taskName, taskDescription, modelPageDescription = null) {
    this.name = taskName;
    this.description = taskDescription;
    this.modelDescription = modelPageDescription ?? taskDescription;
  }
}
