import React, {Component} from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import withPagination from "./pagination";
import PageNavigation from "./PageNavigation";

class PaginationSpy extends Component {
  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    console.log('spy component updated with props', this.props);
  }

  render() {
    return <div></div>;
  }
}

describe('withPagination()', () => {
  let Paginated;
  let selectPage;
  let wrapper;

  beforeEach(() => {
    Paginated = withPagination(PaginationSpy, 'dataProp');
    selectPage = jest.fn();
    wrapper = mount(<Paginated />);
  });

  it('adds pagination props to wrapped component', () => {
    const spy = wrapper.find(PaginationSpy);
    const props = spy.props();

    expect(props.dataProp).toEqual([]);
    expect(props.selectedPage).toEqual(1);
    expect(props.pageCount).toEqual(1);
  });

  it('adds a PageNavigation component after the wrapped component', () => {
    const paginated = wrapper.find('.paginated-content');

    expect(paginated.childAt(1).is(PageNavigation)).toBe(true);
  });

  it('splits input data into pages of 12 items', () => {
    wrapper = mount(<Paginated data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />);

    expect(wrapper.find(PaginationSpy).prop('dataProp')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  describe('page button clicks are passed through from PageNavigation', () => {
    it('passes the page button click', () => {
      wrapper = mount(<Paginated data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} selectedPage={2}/>);
      wrapper.find('.page-nav__page-button').at(0).simulate('click');

      expect(wrapper.state('selectedPage')).toBe(1);
    });

    it('passes the previous button click', () => {
      wrapper = mount(<Paginated data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} selectedPage={2}/>);
      wrapper.find('.page-nav__prev-button').at(0).simulate('click');

      expect(wrapper.state('selectedPage')).toBe(1);
    });

    it('passes the next button click', () => {
      wrapper = mount(<Paginated data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} selectedPage={1}/>);
      wrapper.find('.page-nav__next-button').at(0).simulate('click');

      expect(wrapper.state('selectedPage')).toBe(2);
    });
  });
});
