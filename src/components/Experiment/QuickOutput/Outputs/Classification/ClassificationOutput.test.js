import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ClassificationOutput from './ClassificationOutput';
import TopPrediction from "./TopPrediction";
import PredictionExpander from "../../../../Common/PredictionExpander";
import TestFeatures from "./Features";

describe('Classification Output Component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<ClassificationOutput features={TestFeatures} modelId={1}/>);
    });

    it('with a container div', () => {
      expect(wrapper.at(0).type()).toBe('div');
      expect(wrapper.at(0).prop('className')).toBe('classification-output');
    });

    it('with a title', () => {
      expect(wrapper.childAt(0).type()).toBe('h3');
      expect(wrapper.childAt(0).prop('className')).toBe('classification-output__title');
      expect(wrapper.childAt(0).text()).toBe('Output');
    });

    it('with a subtitle', () => {
      expect(wrapper.childAt(1).type()).toBe('div');
      expect(wrapper.childAt(1).prop('className')).toBe('classification-output__subtitle');
      expect(wrapper.childAt(1).text()).toBe('What this model thinks the image is.');
    });

    describe('with a list of predictions', () => {
      describe('beginning with the top prediction component', () => {
        it('that has been passed the first prediction', () => {
          const topPrediction = wrapper.childAt(2).childAt(0);

          expect(topPrediction.type()).toBe(TopPrediction);
          expect(topPrediction.prop('feature')).toBe(TestFeatures[0]);
        });
      });

      it('that shows a prediction expander', () => {
        const predictions = wrapper.childAt(2);

        expect(predictions.prop('className')).toBe('classification-output__predictions');
        expect(predictions.childAt(1).type()).toBe(PredictionExpander);
        expect(predictions.childAt(1).prop('predictions')).toBe(TestFeatures);
      });

    });
  });
});
