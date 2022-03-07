import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import ClassificationOutput from './ClassificationOutput';
import TopPrediction from "./TopPrediction";
import Prediction from "./Prediction";
import TestFeatures from "./Features";

describe('Classification Output Component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<ClassificationOutput features={TestFeatures} />);
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

      it('that shows the second two predictions by default', () => {
        const predictions = wrapper.childAt(2);

        expect(predictions.prop('className')).toBe('classification-output__predictions');
        expect(predictions.childAt(1).type()).toBe(Prediction);
        expect(predictions.childAt(1).prop('feature')).toBe(TestFeatures[1]);
        expect(predictions.childAt(2).type()).toBe(Prediction);
        expect(predictions.childAt(2).prop('feature')).toBe(TestFeatures[2]);
      });

      it('that hides the fourth prediction and beyond in an expandable container', () => {
        const additional = wrapper.childAt(2).childAt(3);

        expect(additional.prop('className')).toBe('classification-output__prediction-overflow classification-output__prediction-overflow--collapsed');
        expect(additional.children.length).toBe(1);
        expect(additional.childAt(0).type()).toBe(Prediction);
        expect(additional.childAt(0).prop('feature')).toBe(TestFeatures[3]);
      });

      it('that has a button to expand the expandable container', () => {
        const expander = wrapper.childAt(3);

        expect(expander.type()).toBe('button');
        expect(expander.text()).toBe('Show all predictions');
        expect(expander.prop('className')).toBe('classification-output__expand classification-output__expand--collapsed');
      });

      it('where clicking the expand button expands the container', () => {
        wrapper.childAt(3).simulate('click');
        const expander = wrapper.find('.classification-output__expand');
        const overflow = wrapper.find('.classification-output__prediction-overflow');

        expect(expander.prop('className')).toBe('classification-output__expand');
        expect(expander.text()).toBe('Hide all predictions');
        expect(overflow.prop('className')).toBe('classification-output__prediction-overflow');
      });
    });
  });
});
