import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import withPagination from "./Pagination";
import PageNavigation from "./PageNavigation";
import PageNavigationSummary from "./PageNavigationSummary";

function PaginationSpy(props) {
    return <div></div>;
}


describe('withPagination()', () => {
    let Paginated;
    let selectPage;
    let wrapper;

    beforeEach(() => {
        Paginated = withPagination(PaginationSpy, 'dataProp');
        selectPage = jest.fn();
        wrapper = mount(<Paginated/>);
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

        expect(paginated.childAt(2).is(PageNavigation)).toBe(true);
    });

    it('adds a PageNavigationSummary component before the wrapped component', () => {
        const paginated = wrapper.find('.paginated-content');

        expect(paginated.childAt(0).is(PageNavigationSummary)).toBe(true);
    });

    it('passes page navigation props to PageNavigationSummary', () => {
        wrapper = mount(<Paginated
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]}
            selectedPage={2}/>);
        const props = wrapper.find(PageNavigationSummary).props();
        expect(props.data).toEqual([25]);
        expect(props.pageCount).toEqual(2);
        expect(props.searchText).toBeUndefined();
        expect(props.selectedPage).toEqual(2);
        expect(props.totalCount).toEqual(25);
        // expect(wrapper.find(PageNavigationSummary).props()).toEqual({
        //   data: [13],
        //   pageCount: 2,
        //   searchText: undefined,
        //   selectedPage: 2,
        //   totalCount: 13
        // });
    });

    it('splits input data into pages of 13 items', () => {
        wrapper = mount(<Paginated data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}/>);

        expect(wrapper.find(PaginationSpy).prop('dataProp')).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    });

    describe('page button clicks are passed through from PageNavigation', () => {
        it('passes the page button click', () => {
            wrapper = mount(<Paginated data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} selectedPage={2}/>);
            wrapper.find('.page-nav__page-button').at(0).simulate('click');

            expect(wrapper.findWhere(node => node.type() && node.text().includes("page 1")).exists()).toEqual(true);

        });

        it('passes the previous button click', () => {
            wrapper = mount(<Paginated data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} selectedPage={2}/>);
            wrapper.find('.page-nav__prev-button').at(0).simulate('click');

            expect(wrapper.findWhere(node => node.type() && node.text().includes("page 1")).exists()).toEqual(true);
        });

        it('passes the next button click', () => {
            wrapper = mount(<Paginated
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]}
                selectedPage={1}/>);
            wrapper.find('.page-nav__next-button').at(0).simulate('click');

            expect(wrapper.findWhere(node => node.type() && node.text().includes("page 2")).exists()).toEqual(true);

        });
    });
});
