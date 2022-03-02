import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import Rating from "./Rating";
import Icon from "../../../../Icon/Icon";

describe('Classification Rating component', () => {
  describe('Render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Rating />);
    });

    it('with a container div', () => {
      expect(wrapper.at(0).type()).toBe('div');
      expect(wrapper.at(0).prop('className')).toBe('rating');
    });

    it('with a title', () => {
      const title = wrapper.childAt(0);

      expect(title.prop('className')).toBe('rating__title');
      expect(title.text()).toBe('Rate the prediction of this model and image');
    });

    describe('with a button container', () => {
      let buttons;

      beforeEach(() => {
        buttons = wrapper.childAt(1);
      });

      it('with the correct class', () => {
        expect(buttons.prop('className')).toBe('rating__buttons');
        expect(buttons.prop('role')).toBe('radiogroup');
      });

      it('with a Correct radio button', () => {
        const button = buttons.childAt(0);

        expect(button.type()).toBe('div');
        expect(button.prop('className')).toBe('rating__correct');
        expect(button.prop('role')).toBe('radio');
        expect(button.childAt(0).type()).toBe(Icon);
        expect(button.childAt(1).text()).toBe('Correct');
      });

      it('with an Incorrect radio button', () => {
        const button = buttons.childAt(1);

        expect(button.type()).toBe('div');
        expect(button.prop('className')).toBe('rating__incorrect');
        expect(button.prop('role')).toBe('radio');
        expect(button.childAt(0).type()).toBe(Icon);
        expect(button.childAt(1).text()).toBe('Incorrect');
      });

      describe('with correct functionality', () => {
        it('buttons have the correct default state', () => {
          const correct = buttons.childAt(0);
          const incorrect = buttons.childAt(1);

          expect(correct.prop('tabIndex')).toBe(0);
          expect(correct.prop('aria-checked')).toBeFalsy();
          expect(incorrect.prop('tabIndex')).toBe(-1);
          expect(incorrect.prop('aria-checked')).toBeFalsy();
        });

        it('clicking Incorrect updates the selection state', () => {
          buttons.childAt(1).simulate('click');
          const correct = wrapper.childAt(1).childAt(0);
          const incorrect = wrapper.childAt(1).childAt(1);

          expect(correct.prop('tabIndex')).toBe(-1);
          expect(correct.prop('aria-checked')).toBeFalsy();
          expect(incorrect.prop('className')).toBe('rating__incorrect rating__incorrect--checked');
          expect(incorrect.prop('tabIndex')).toBe(0);
          expect(incorrect.prop('aria-checked')).toBeTruthy();
        });
      });
    });
  });
});
