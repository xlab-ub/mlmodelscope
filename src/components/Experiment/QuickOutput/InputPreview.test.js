import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import InputPreview from "./InputPreview";

describe('Input Preview component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<InputPreview input='http://example.com/image1.jpg' />);
    });

    it('with a container div', () => {
      expect(wrapper.at(0).type()).toBe('div');
      expect(wrapper.at(0).prop('className')).toBe('input-preview');
    });

    it('containing a title', () => {
      const title = wrapper.childAt(0);

      expect(title.type()).toBe('h3');
      expect(title.prop('className')).toBe('input-preview__title');
      expect(title.text()).toBe('Input Image');
    });

    it('an image', () => {
      const image = wrapper.childAt(1);

      expect(image.prop('className')).toBe('input-preview__image');
      expect(image.prop('src')).toBe('http://example.com/image1.jpg');
    });

    it('and a button to try another input', () => {
      const button = wrapper.childAt(2);

      expect(button.type()).toBe('button');
      expect(button.prop('className')).toBe('input-preview__back-button');
      expect(button.text()).toBe('Try a different image');
    });
  });

  it('passes back button clicks to onBackClicked prop', () => {
    const backClicked = jest.fn();
    const wrapper = shallow(<InputPreview onBackClicked={backClicked} />);
    wrapper.find('.input-preview__back-button').simulate('click');

    expect(backClicked.mock.calls.length).toBe(1);
  });
});
