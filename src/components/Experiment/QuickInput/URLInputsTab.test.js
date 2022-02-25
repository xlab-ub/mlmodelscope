import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import URLInputsTab from './URLInputsTab';

describe('URL Inputs Tab', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<URLInputsTab />);
    });

    it('a title', () => {
      const title = wrapper.find('.url-inputs').childAt(0);

      expect(title.prop('className')).toBe('url-inputs__title');
      expect(title.text()).toBe('Paste URL of image');
    });

    it('a text input box', () => {
      const input = wrapper.find('.url-inputs').childAt(1);

      expect(input.type()).toBe('input');
      expect(input.prop('type')).toBe('url');
      expect(input.prop('className')).toBe('url-inputs__url');
    });
  });

  describe('Triggers inputSelected callback', () => {
    let inputSelected, wrapper;

    beforeEach(() => {
      inputSelected = jest.fn();
      wrapper = shallow(<URLInputsTab inputSelected={inputSelected} />);
    });

    it('when text with URL formatting is input', () => {
      wrapper.find('.url-inputs__url').simulate('change', { target: { value: 'http://example.com/image1.jpg' }});

      expect(inputSelected.mock.calls.length).toBe(1);
      expect(inputSelected.mock.calls[0][0]).toBe('http://example.com/image1.jpg');

      wrapper.find('.url-inputs__url').simulate('change', { target: { value: 'https://example.com/image1.jpg' }});

      expect(inputSelected.mock.calls.length).toBe(2);
    });

    it('with an empty string when non-URL formatted text is input', () => {
      wrapper.find('.url-inputs__url').simulate('change', { target: { value: 'not a URL' }});

      expect(inputSelected.mock.calls.length).toBe(1);
      expect(inputSelected.mock.calls[0][0]).toBe("");
    });
  });
});
