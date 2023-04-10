import React, {useEffect} from "react";
import PageNavigation from "./PageNavigation";
import PageNavigationSummary from "./PageNavigationSummary";
import {usePrevious} from "../../common/usePrevious";

export default function withPagination(WrappedComponent, dataPropertyName, searchText) {

    const defaultProps = {
        data: [],
        itemsPerPage: 24,
        pageCount: 1,
        selectedPage: 1
    }

    function Paginated(givenProps) {
        const props = {...defaultProps, ...givenProps};

        const paginateData = (currentState = null) => {
            const selectedPage = currentState ? currentState.selectedPage : props.selectedPage;
            const start = 24 * (selectedPage - 1);
            const end = 24 * selectedPage;
            const pageData = props.data.slice(start, end);
            const pageCount = parseInt(1 + props.data.length / 24);

            return {
                pageData,
                pageCount,
                selectedPage
            }
        }

        const [state, setState] = React.useState(paginateData());

        const previousState = usePrevious(state);

        useEffect(() => {
            if (previousState.data !== state.data || previousState.selectedPage !== state.selectedPage) {
                setState(paginateData(state));
            }
        }, [state])

        const selectPage = (selectedPage) => {
            setState(s => ({
                ...s,
                selectedPage
            }));
            setTimeout(() => {
                window.scrollTo(0, document.querySelector(".model-list-page__content").offsetTop);
            }, 250)
        }

        let wrappedProps = {}
        wrappedProps[dataPropertyName] = state.pageData;

        return (
            <div className="paginated-content">
                <PageNavigationSummary data={state.pageData} pageCount={state.pageCount}
                                       selectedPage={state.selectedPage} totalCount={props.data.length}
                                       searchText={searchText} selectPage={selectPage}/>
                <WrappedComponent pageCount={state.pageCount}
                                  selectedPage={state.selectedPage} {...props} {...wrappedProps} />
                <PageNavigation pageCount={state.pageCount} selectedPage={state.selectedPage}
                                selectPage={selectPage}/>
            </div>
        );
    }


    return Paginated;
}
