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

  describe('Calls back to uploadSelected', () => {
    it('on upload success', () => {
      const inputSelected = jest.fn();
      const wrapper = shallow(<UploadInputsTab values={[""]} inputSelected={inputSelected}/>);
      wrapper.instance().onComplete({successful: [{uploadURL: 'upload-url'}]}, {});

      expect(inputSelected.mock.calls.length).toBe(1);
      expect(inputSelected.mock.calls[0][0]).toStrictEqual(['upload-url']);
    });
    it("will add uploaded inputs to existing values", () => {
      let values = ["test"];
      const inputSelected = (v) => values = v;
      const wrapper = shallow(<UploadInputsTab values={values} inputSelected={inputSelected}/>);
      wrapper.instance().onComplete({successful: [{uploadURL: 'upload-url'}]}, {});

      expect(values.length).toEqual(2);
      expect(values[1]).toEqual("upload-url");
    })
  });
});
