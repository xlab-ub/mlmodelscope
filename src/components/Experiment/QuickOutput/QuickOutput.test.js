import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import QuickOutput from "./QuickOutput";
import InputPreview from "./InputPreview";
import ClassificationOutput from "./Outputs/Classification/ClassificationOutput";
import {TestImageClassificationResult} from "./Outputs/Classification/Features";
import {TestObjectDetectionResult} from "./Outputs/ObjectDetection/testData/TestFeatures";

const TestInput = "http://example.com/image1.jpeg";

describe('Experiment Quick Output component', () => {
  describe("with output", () => {
    it("image classification", () => {
      let wrapper = mount(<QuickOutput input={TestInput} trialOutput={TestImageClassificationResult}
                                       model={TestImageClassificationResult.model}
                                       features={TestImageClassificationResult.results.responses[0].features}/>);
      const prediction_text = wrapper.find(".top-prediction__prediction").text();

      expect(prediction_text.includes("bee eater")).toBe(true);

    })
    it("object detection", () => {
      let wrapper = mount(<QuickOutput input={TestInput} trialOutput={TestObjectDetectionResult}
                                       model={TestObjectDetectionResult.model}/>);

      const carText = wrapper.find(".object-detection-table__row-input-label").first().text().toLowerCase();

      expect(carText.includes("car")).toBe(true);

    })
  })
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<QuickOutput input={TestInput} trialOutput={TestImageClassificationResult}
                                     model={TestImageClassificationResult.model}/>);
    });

    it('a container div', () => {
      expect(wrapper.at(0).type()).toBe('div');
      expect(wrapper.at(0).prop('className')).toBe('quick-output');
    });

    describe('with a header', () => {
      let header;

      beforeEach(() => {
        header = wrapper.at(0).childAt(0);
      });

      it('wrapped in a div', () => {
        expect(header.type()).toBe('div');
        expect(header.prop('className')).toBe('quick-output__header');
      });

      it('with the correct title', () => {
        const header = wrapper.find('.quick-output__header');
        expect(header.childAt(0).type()).toBe('h2');
        expect(header.childAt(0).prop('className')).toBe('quick-output__title');
        expect(header.childAt(0).text()).toBe('Try This Model');
      });

      // share button is hidden for now
      // it('and a share button', () => {
      //   const header = wrapper.find('.quick-output__header');
      //   expect(header.childAt(1).type()).toBe('button');
      //   expect(header.childAt(1).prop('className')).toBe('quick-output__share-button');
      // });
    });

    describe('with content', () => {
      let content;

      beforeEach(() => {
        content = wrapper.at(0).childAt(1);
      });

      it('wrapped in a div', () => {
        expect(content.type()).toBe('div');
        expect(content.prop('className')).toBe('quick-output__content');
      });

      it('that contains an input image preview', () => {
        const preview = content.childAt(0);

        expect(preview.type()).toBe(InputPreview);
        expect(preview.prop('input')).toBe(TestInput);
      });

      it('that contains a classification output', () => {
        const output = content.childAt(1);

        expect(output.type()).toBe(ClassificationOutput);
      });
    });

    describe('with a footer', () => {
      let footer;

      beforeEach(() => {
        footer = wrapper.at(0).childAt(2);
      });

      it('wrapped in a div', () => {
        expect(footer.type()).toBe('div');
        expect(footer.prop('className')).toBe('quick-output__footer');
      });

      it('with a use in experiment button', () => {
        expect(footer.childAt(0).type()).toBe('button');
        expect(footer.childAt(0).prop('className')).toBe('quick-output__compare-button');
        expect(footer.childAt(0).text()).toBe('Compare with other models');
      });
    });
  });
});
