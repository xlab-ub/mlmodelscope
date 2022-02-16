import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import PageNavigation from "./PageNavigation";

describe('PageNavigation', () => {
  it('renders with a single page', () => {
    const nav = shallow(<PageNavigation pageCount={1} selectedPage={1} />);

    expect(nav.find('.page-nav').length).toEqual(1);
    expect(nav.find('.page-nav__prev-button').length).toEqual(1);
    expect(nav.find('.page-nav__next-button').length).toEqual(1);
    expect(nav.find('.page-nav__page-buttons').length).toEqual(1);
    expect(nav.find('.page-nav__page-buttons').children().length).toEqual(1);
    expect(nav.find('.page-nav__page-button').length).toEqual(1);
    expect(nav.find('.page-nav__page-button--selected').text()).toEqual('1');
  });

  it('renders with two pages', () => {
    const nav = shallow(<PageNavigation pageCount={2} selectedPage={1} />);
    const pageButtons = nav.find('.page-nav__page-button');

    expect(pageButtons.length).toEqual(2);
    expect(pageButtons.at(0).text()).toEqual('1');
    expect(pageButtons.at(1).text()).toEqual('2');
  });

  it('renders buttons for the first three and last page when first page is selected', () => {
    const nav = shallow(<PageNavigation pageCount={5} selectedPage={1} />);
    const pageButtons = nav.find('.page-nav__page-buttons');

    expect(pageButtons.children().length).toEqual(5);
    expect(pageButtons.childAt(0).text()).toEqual('1');
    expect(pageButtons.childAt(3).text()).toEqual('<Icon />');
    expect(pageButtons.childAt(4).text()).toEqual('5');
  });

  describe('user interaction', () => {
    let nav;
    let selectPage;

    beforeEach(() => {
      selectPage = jest.fn();
      nav = shallow(<PageNavigation pageCount={4} selectedPage={2} selectPage={selectPage} />);
    });

    it('passes page button click to selectPage', () => {
      nav.find('.page-nav__page-button').at(1).simulate('click');

      expect(selectPage.mock.calls.length).toBe(1);
      expect(selectPage.mock.calls[0][0]).toBe(2);
    });

    it('passes next button click through to selectPage', () => {
      nav.find('.page-nav__next-button').simulate('click');

      expect(selectPage.mock.calls.length).toBe(1);
      expect(selectPage.mock.calls[0][0]).toBe(3);
    });

    it('will not navigate beyond last page from next button click', () => {
      nav = shallow(<PageNavigation pageCount={4} selectedPage={4} selectPage={selectPage} />);
      nav.find('.page-nav__next-button').simulate('click');

      expect(selectPage.mock.calls.length).toBe(1);
      expect(selectPage.mock.calls[0][0]).toBe(4);
    });

    it('passes previous button click through to selectPage', () => {
      nav.find('.page-nav__prev-button').simulate('click');

      expect(selectPage.mock.calls.length).toBe(1);
      expect(selectPage.mock.calls[0][0]).toBe(1);
    });

    it('will not navigate beyond page 1 from previous button click', () => {
      nav = shallow(<PageNavigation pageCount={4} selectedPage={1} selectPage={selectPage} />);
      nav.find('.page-nav__prev-button').simulate('click');

      expect(selectPage.mock.calls.length).toBe(1);
      expect(selectPage.mock.calls[0][0]).toBe(1);
    });
  });
});
