import React, {Component} from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import withPagination from "./pagination";

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
  let wrapper;

  beforeEach(() => {
    Paginated = withPagination(PaginationSpy);
    wrapper = mount(<Paginated />);
  });

  it('adds pagination props to wrapped component', () => {
    const spy = wrapper.find(PaginationSpy);
    const props = spy.props();

    expect(props.data).toEqual([]);
    expect(props.selectedPage).toEqual(1);
    expect(props.pageCount).toEqual(1);
    expect(typeof(props.selectPage)).toEqual('function');
  });

  it('splits data into pages of twelve', () => {
    wrapper.setProps({ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] });

    setTimeout(() => {
      wrapper.update();
      const spy = wrapper.find(PaginationSpy);
      const props = spy.props();

      expect(props.pageCount).toEqual(2);
      expect(props.data).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    }, 0)
  });
});
