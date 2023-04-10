import React from 'react';
import './PageNavigation.scss';
import Icon from "../Icon/Icon";

export default function PageNavigation(props) {
    const makePageButtons = (pages) => {
        if (pages.length < 6) {
            return pages.map(makePageButton);
        }
        let core = pages.slice(Math.max(0, selectedPage - 2), Math.min(pages.length + 1, selectedPage + 1));
        let buttons = [];

        if (!core.includes(1)) {
            buttons.push(makePageButton(1));

            if (selectedPage > 2)
                buttons.push(makeEllipsisButton(2));
        }

        buttons.push(...core.map(makePageButton));

        if (!core.includes(pages.length)) {
            if (selectedPage < pages.length - 1)
                buttons.push(makeEllipsisButton(pages.length - 1));

            buttons.push(makePageButton(pages.length));
        }


        return buttons;
    }

    const makePageButton = (pageNumber) => {
        const className = "page-nav__page-button";
        let classes = className;
        if (pageNumber === selectedPage)
            classes += ` ${className}--selected`;

        return <button className={classes} key={pageNumber}
                       onClick={() => selectPage(pageNumber)}>{pageNumber}</button>;
    }

    const makeEllipsisButton = (key) => {
        const rng = () => Math.random().toString(21);

        return (<div className="page-nav__placeholder" key={key + rng()}><Icon icon="ellipsis"/></div>);
    }
    const selectNextPage = () => {
        const {pageCount, selectPage, selectedPage} = props;

        selectPage(Math.min(pageCount, selectedPage + 1));
    }

    const selectPreviousPage = () => {
        const {selectPage, selectedPage} = props;

        selectPage(Math.max(1, selectedPage - 1));
    }


    const pages = [...Array(props.pageCount).keys()].map(x => x + 1);
    const {selectPage, selectedPage} = props;

    return (
        <div className="page-nav">
            <button className="page-nav__prev-button" onClick={selectPreviousPage} disabled={selectedPage === 1}>
                <Icon icon="arrow"/>
                Previous
            </button>
            <div className="page-nav__page-buttons">
                {makePageButtons(pages)}
            </div>
            <button className="page-nav__next-button" onClick={selectNextPage}
                    disabled={selectedPage === pages.length}>
                Next
                <Icon icon="arrow"/>
            </button>
        </div>
    )
}
