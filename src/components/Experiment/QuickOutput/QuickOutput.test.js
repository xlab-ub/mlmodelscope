import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import QuickOutput from "./QuickOutput";
import InputPreview from "./InputPreview";
import ClassificationOutput from "./Outputs/ClassificationOutput";

describe('Experiment Quick Output component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<QuickOutput />);
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
        expect(header.childAt(0).type()).toBe('div');
        expect(header.childAt(0).prop('className')).toBe('quick-output__title');
        expect(header.childAt(0).text()).toBe('Try This Model');
      });

      it('and a share button', () => {
        const header = wrapper.find('.quick-output__header');
        expect(header.childAt(1).type()).toBe('button');
        expect(header.childAt(1).prop('className')).toBe('quick-output__share-button');
      });
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

      it('with a try again link', () => {
        expect(footer.childAt(0).type()).toBe('a');
        expect(footer.childAt(0).prop('className')).toBe('quick-output__try-again');
        expect(footer.childAt(0).text()).toBe('Try this again');
      });

      it('with a use in experiment button', () => {
        expect(footer.childAt(1).type()).toBe('button');
        expect(footer.childAt(1).prop('className')).toBe('quick-output__experiment-button');
        expect(footer.childAt(1).text()).toBe('Use in advanced experiment');
      });
    });
  });
});
