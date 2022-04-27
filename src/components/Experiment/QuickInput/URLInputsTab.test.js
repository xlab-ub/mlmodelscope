import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import URLInputsTab from './URLInputsTab';

describe('URL Inputs Tab', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<URLInputsTab/>);
    });

    it('a title', () => {
      const title = wrapper.find('.url-inputs').childAt(0);

      expect(title.prop('className')).toBe('url-inputs__title');
      expect(title.text()).toBe('Paste URL of image');
    });

    describe('a URL input box', () => {
      let input;

      beforeEach(() => {
        input = wrapper.find('.url-inputs').childAt(1);
      });

      it('with the expected properties', () => {
        expect(input.type()).toBe('input');
        expect(input.prop('type')).toBe('url');
        expect(input.prop('className')).toBe('url-inputs__url');
        expect(input.prop('placeholder')).toBe('Paste any image URL');
      });
    });
  });

  describe('Triggers inputSelected callback', () => {
    let inputSelected, wrapper;

    const LOAD_SRC = 'http://example.com/image1.jpg';
    beforeAll(() => {
      Object.defineProperty(global.Image.prototype, 'src', {
        // Define the property setter
        set(src) {
          if (src === LOAD_SRC) {
            setTimeout(() => this.onload());
          } else {
            setTimeout(() => this.onerror(new Error('mocked error')));
          }
        },
      });
    });
    beforeEach(() => {
      inputSelected = jest.fn();
      wrapper = shallow(<URLInputsTab inputSelected={inputSelected}/>);
    });

    it('when text with URL formatting is input', async () => {
      wrapper.find('.url-inputs__url').simulate('change', {target: {value: LOAD_SRC}});

      await new Promise(resolve => setTimeout(resolve, 10));

      expect(inputSelected.mock.calls.length).toBe(1);
      expect(inputSelected.mock.calls[0][0]).toBe(LOAD_SRC);

      wrapper.find('.url-inputs__url').simulate('change', {target: {value: LOAD_SRC}});
      
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(inputSelected.mock.calls.length).toBe(2);
    });

    it('with an empty string when non-URL formatted text is input', () => {
      wrapper.find('.url-inputs__url').simulate('change', {target: {value: 'not a URL'}});

      expect(inputSelected.mock.calls[0][0]).toBe("");
    });
  });
});
