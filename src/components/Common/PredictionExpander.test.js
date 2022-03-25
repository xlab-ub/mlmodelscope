import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import PredictionExpander from "./PredictionExpander";
import Prediction from "../Experiment/QuickOutput/Outputs/Classification/Prediction";
import TestFeatures from "../Experiment/QuickOutput/Outputs/Classification/Features";

describe('Prediction Expander Component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<PredictionExpander predictions={TestFeatures} />);
    });

    it('with a container div', () => {
      expect(wrapper.at(0).type()).toBe('div');
      expect(wrapper.at(0).prop('className')).toBe('prediction-expander');
    });

    it('that contains the first two predictions', () => {
      const predictions = wrapper.childAt(0);
      expect(predictions.type()).toBe('div');
      expect(predictions.prop('className')).toBe('prediction-expander__predictions');
      expect(predictions.childAt(0).type()).toBe(Prediction);
      expect(predictions.childAt(0).prop('feature')).toBe(TestFeatures[1]);
      expect(predictions.childAt(1).type()).toBe(Prediction);
      expect(predictions.childAt(1).prop('feature')).toBe(TestFeatures[2]);
    });

    it('and a prediction overflow area', () => {
      const predictionsOverflow = wrapper.childAt(0).childAt(2);
      expect(predictionsOverflow.type()).toBe('div');
      expect(predictionsOverflow.prop('className')).toBe('prediction-expander__prediction-overflow prediction-expander__prediction-overflow--collapsed');
      expect(predictionsOverflow.childAt(0).type()).toBe(Prediction);
      expect(predictionsOverflow.childAt(0).prop('feature')).toBe(TestFeatures[3]);
    });

    it('that has a button to expand the expandable container', () => {
      const expander = wrapper.childAt(1);

      expect(expander.type()).toBe('button');
      expect(expander.text()).toBe('Show all predictions');
      expect(expander.prop('className')).toBe('prediction-expander__expand prediction-expander__expand--collapsed');
    });

    it('where clicking the expand button expands the container', () => {
      wrapper.childAt(1).simulate('click');
      const expander = wrapper.find('.prediction-expander__expand');
      const overflow = wrapper.find('.prediction-expander__prediction-overflow');

      expect(expander.prop('className')).toBe('prediction-expander__expand');
      expect(expander.text()).toBe('Hide all predictions');
      expect(overflow.prop('className')).toBe('prediction-expander__prediction-overflow');
    });
  });
});
