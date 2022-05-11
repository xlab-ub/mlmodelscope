import React from 'react';
import QuickInput from "./QuickInput";
import birdy from '../../../stories/assets/birdy.png';
import crabby from '../../../stories/assets/crabby.png';
import kitty from '../../../stories/assets/kitty.png';
import sampleObjectDetection1 from '../../../resources/img/obj-1.jpg';
import sampleObjectDetection2 from '../../../resources/img/obj-2.jpg';
import sampleObjectDetection3 from '../../../resources/img/obj-3.jpg';
import {
  image_classification,
  image_enhancement,
  object_detection,
  semantic_segmentation
} from "../../../helpers/TaskIDs";

export default {
  title: 'Experiments/Quick Input',
  component: QuickInput,
};

const Template = (args) => <QuickInput {...args} />;

export const ImageClassification = Template.bind({});
ImageClassification.args = {
  sampleInputs: [
    kitty,
    crabby,
    birdy
  ],
  model: {
    output: {
      type: image_classification
    }
  }
}

export const ObjectDetection = Template.bind({});
ObjectDetection.args = {
  sampleInputs: [
    sampleObjectDetection1,
    sampleObjectDetection2,
    sampleObjectDetection3,
  ],
  model: {
    output: {
      type: object_detection
    }
  }

}

export const SemanticSegmentation = Template.bind({});
SemanticSegmentation.args = {
  sampleInputs: [
    kitty,
    crabby,
    birdy
  ],
  model: {
    output: {
      type: semantic_segmentation
    }
  }
}

export const ImageEnhancement = Template.bind({});
ImageEnhancement.args = {
  sampleInputs: [
    kitty,
    crabby,
    birdy
  ],
  model: {
    output: {
      type: image_enhancement
    }
  }
}
