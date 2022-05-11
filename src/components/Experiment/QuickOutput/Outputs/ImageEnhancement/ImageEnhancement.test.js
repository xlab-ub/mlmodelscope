import React from "react";
import {shallow} from "enzyme";
import ImageEnhancement from "./ImageEnhancement";
import {TestImageEnhancementData} from "./testData/TestFeatures";

const testFeature = {
  "id": "626ffdfdb0c7e600019e99f8",
  "raw_image": {
    "channels": 3,
    "char_list": null,
    "data_type": "float32",
    "float_list": null,
    "height": 620,
    "jpeg_data": "JPEG_DATA",
    "width": 1100
  },
  "type": "RAW_IMAGE"
}

describe('Image Enhancement Output Component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<ImageEnhancement trial={TestImageEnhancementData}/>);
    });

    it('with a container div', () => {
      expect(wrapper.at(0).type()).toBe('div');
      expect(wrapper.at(0).prop('className')).toBe('image-enhancement');
    });

    it('containing the input img', () => {
      const title = wrapper.childAt(0).childAt(0);
      expect(title.type()).toBe('h3');
      expect(title.prop('className')).toBe('image-enhancement__title');
      expect(title.text()).toBe('Input Image');
    });
  });
});
