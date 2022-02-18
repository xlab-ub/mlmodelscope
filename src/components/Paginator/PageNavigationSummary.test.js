import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import PageNavigationSummary from "./PageNavigationSummary";

describe('PageNavigationSummary', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PageNavigationSummary data={[1, 2, 3, 4]} pageCount={3} selectedPage={2} totalCount={25} />);
  });

  it('renders text from pagination props', () => {
    expect(wrapper.text()).toEqual('page 2 of 3, showing 4 of 25 results');
  });

  it('bolds the correct text', () => {
    const strongs = wrapper.find('strong');

    expect(strongs.at(0).text()).toEqual('2 of 3');
    expect(strongs.at(1).text()).toEqual('4 of 25 results');
  });
});
