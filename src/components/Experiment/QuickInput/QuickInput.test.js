import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import QuickInput from "./QuickInput";

describe('Experiment Quick Input Component', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<QuickInput />);
    });

    it('has the correct container class', () => {
      expect(wrapper.find('.quick-input').length).toBe(1);
    });

    it('has the correct title', () => {
      const title = wrapper.find('.quick-input').find('.quick-input__title');

      expect(title.length).toBe(1);
      expect(title.text()).toBe('Try this model');
    });

    it('has the correct subtitle', () => {
      const subtitle = wrapper.find('.quick-input').find('.quick-input__subtitle');

      expect(subtitle.length).toBe(1);
      expect(subtitle.text()).toBe(`Choose an image to run through this model and see it's predictions.`);
    });

    it('has a tab container', () => {
      const container = wrapper.find('.quick-input').find('.quick-input__tabs');

      expect(container.length).toBe(1);
    });

    it('has 3 tabs with titles', () => {
      const titleContainer = wrapper.find('.quick-input').find('.quick-input__tabs').find('.quick-input__tab-titles');
      const titles = titleContainer.find('button.quick-input__tab-title');
      const tabs = wrapper.find('.quick-input').find('.quick-input__tabs').find('.quick-input__tab');

      expect(titleContainer.prop('role')).toBe('tablist');
      expect(titles.length).toBe(3);
      expect(titles.at(0).text()).toBe('Sample inputs');
      expectTitleAccessibilityWithId(titles.at(0), 'sample-input');
      expect(titles.at(1).text()).toBe('Upload');
      expectTitleAccessibilityWithId(titles.at(1), 'upload-input');
      expect(titles.at(2).text()).toBe('URL');
      expectTitleAccessibilityWithId(titles.at(2), 'url-input');
      expect(tabs.length).toBe(3);
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

    it('has the first tab selected by default', () => {
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

    it('clicking a tab title selects that tab', () => {
      wrapper.find('.quick-input__tab-title').at(1).simulate('click');
      const titles = wrapper.find('.quick-input__tab-title');
      const tabs = wrapper.find('.quick-input__tab');
      const selectedTab = wrapper.find('.quick-input__tab--selected');

      expect(titles.at(0).prop('aria-selected')).toBe('false');
      expect(titles.at(1).prop('aria-selected')).toBe('true');
      expect(tabs.at(1).prop('id')).toBe(selectedTab.prop('id'));
    });

    it('has a run button', () => {
      const button = wrapper.find('.quick-input').find('button.quick-input__run-model');

      expect(button.length).toBe(1);
    });
  });
});
