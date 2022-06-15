import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import UploadInputsTab from './UploadInputsTab';

describe('Upload Inputs Tab', () => {
  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<UploadInputsTab/>);
    });

    it('the Uppy Dashboard', () => {
      expect(wrapper.find('.upload-inputs').find('Dashboard').length).toBe(1);
    });
  });

});
