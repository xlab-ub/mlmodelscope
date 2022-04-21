export default class Task {
  static image_classification = new Task('Classification', 'These models are trained to recognize a single object in an image', 'This model is trained to recognize a single object in an image');
  static clickthroughrate = new Task('Click-Through Rate', '[insert click-through rate description here]');
  static image_object_detection = new Task('Object Detection', '[insert object detection description here]');
  static image_semantic_segmentation = new Task('Semantic Segmentation', '[insert semantic segmentation description here]');
  static image_instance_segmentation = new Task('Instance Segmentation', '[insert instance segmentation description here]');
  static image_enhancement = new Task('Image Enhancement', '[insert image enhancement description here]');

  constructor(taskName, taskDescription, modelPageDescription = null) {
    this.name = taskName;
    this.description = taskDescription;
    this.modelDescription = modelPageDescription ?? taskDescription;
  }
}
