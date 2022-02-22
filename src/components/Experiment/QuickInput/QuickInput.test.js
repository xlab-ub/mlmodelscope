import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import QuickInput from "./QuickInput";
import SampleInputsTab from "./SampleInputsTab";
import UploadInputsTab from "./UploadInputsTab";
import URLInputsTab from "./URLInputsTab";

describe('Experiment Quick Input Component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<QuickInput />);
    });

    it('the correct container class', () => {
      expect(wrapper.find('.quick-input').length).toBe(1);
    });

    it('the correct title', () => {
      const title = wrapper.find('.quick-input').find('.quick-input__title');

      expect(title.length).toBe(1);
      expect(title.text()).toBe('Try this model');
    });

    it('the correct subtitle', () => {
      const subtitle = wrapper.find('.quick-input').find('.quick-input__subtitle');

      expect(subtitle.length).toBe(1);
      expect(subtitle.text()).toBe(`Choose an image to run through this model and see it's predictions.`);
    });

    describe('with tabs', () => {
      it('in a tab container', () => {
        const container = wrapper.find('.quick-input').find('.quick-input__tabs');

        expect(container.length).toBe(1);
      });

      it('that have titles', () => {
        const titleContainer = wrapper.find('.quick-input').find('.quick-input__tabs').find('.quick-input__tab-titles');
        const titles = titleContainer.find('button.quick-input__tab-title');
        const tabs = wrapper.find('.quick-input').find('.quick-input__tabs').find('.quick-input__tab');

        expect(titles.length).toBe(3);
        expect(titles.at(0).text()).toBe('Sample inputs');
        expect(titles.at(1).text()).toBe('Upload');
        expect(titles.at(2).text()).toBe('URL');
        expect(tabs.length).toBe(3);
      });

      it('that contain the correct components', () => {
        const tabs = wrapper.find('.quick-input__tab');

        expect(tabs.at(0).containsMatchingElement(<SampleInputsTab />)).toBeTruthy();
        expect(tabs.at(1).containsMatchingElement(<UploadInputsTab />)).toBeTruthy();
        expect(tabs.at(2).containsMatchingElement(<URLInputsTab />)).toBeTruthy();
      });

      it('that have accessibility features', () => {
        const titleContainer = wrapper.find('.quick-input').find('.quick-input__tabs').find('.quick-input__tab-titles');
        const titles = titleContainer.find('button.quick-input__tab-title');
        const tabs = wrapper.find('.quick-input__tab');

        expect(titleContainer.prop('role')).toBe('tablist');
        expectTitleAccessibilityWithId(titles.at(0), 'sample-input');
        expectTitleAccessibilityWithId(titles.at(1), 'upload-input');
        expectTitleAccessibilityWithId(titles.at(2), 'url-input');

        expectTabAccessibilityWithId(tabs.at(0), 'sample-input');
        expectTabAccessibilityWithId(tabs.at(1), 'upload-input');
        expectTabAccessibilityWithId(tabs.at(2), 'url-input');

        function expectTitleAccessibilityWithId(title, id) {
          expect(title.prop('role')).toBe('tab');
          expect(title.prop('aria-controls')).toBe(`${id}-panel`);
          expect(title.prop('id')).toBe(`${id}`);
        }

        function expectTabAccessibilityWithId(tab, id) {
          expect(tab.prop('role')).toBe('tabpanel');
          expect(tab.prop('aria-labelledby')).toBe(`${id}`);
          expect(tab.prop('id')).toBe(`${id}-panel`);
        }
      });

      it('where the first tab is selected by default', () => {
        const titles = wrapper.find('.quick-input__tab-title');
        const tabs = wrapper.find('.quick-input__tab');
        const selectedTitle = wrapper.find('.quick-input__tab-title--selected');
        const selectedTab = wrapper.find('.quick-input__tab--selected');

        expect(titles.at(0).prop('aria-selected')).toBe('true');
        expect(titles.at(0).prop('id')).toBe(selectedTitle.prop('id'));
        expect(titles.at(1).prop('aria-selected')).toBe('false');
        expect(titles.at(2).prop('aria-selected')).toBe('false');
        expect(tabs.at(0).prop('id')).toBe(selectedTab.prop('id'));
      });

      it('where clicking a tab title selects that tab', () => {
        wrapper.find('.quick-input__tab-title').at(1).simulate('click');
        const titles = wrapper.find('.quick-input__tab-title');
        const tabs = wrapper.find('.quick-input__tab');
        const selectedTab = wrapper.find('.quick-input__tab--selected');

        expect(titles.at(0).prop('aria-selected')).toBe('false');
        expect(titles.at(1).prop('aria-selected')).toBe('true');
        expect(tabs.at(1).prop('id')).toBe(selectedTab.prop('id'));
      });
    });

    describe('a run button', () => {
      it('with the correct label', () => {
        const button = wrapper.find('.quick-input').find('button.quick-input__run-model');

        expect(button.length).toBe(1);
        expect(button.text()).toBe('Run model and see results');
      });

      it('that is disabled by default', () => {
        const button = wrapper.find('.quick-input__run-model');

        expect(button.prop('disabled')).toBeTruthy();
      });

      it('that becomes enabled when an input is selected', () => {
        wrapper.instance().selectInput('http://example.com/image1.jpg');
        wrapper.update();
        const button = wrapper.find('.quick-input__run-model');

        expect(button.prop('disabled')).toBeFalsy();
      });
    });
  });
});
