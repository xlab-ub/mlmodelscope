import React from 'react';
import './PageNavigationSummary.scss';
import Icon from "../Icon/Icon";

const defaultProps = {
  data: [],
  pageCount: 1,
  selectedPage: 1,
  totalCount: 0,
  selectPage: () => {
  },
};

export default function PageNavigationSummary(givenProps) {
  const props = {...defaultProps, ...givenProps};

  const selectNextPage = () => {
    props.selectPage(Math.min(props.pageCount, props.selectedPage + 1));
  }

  const selectPreviousPage = () => {
    props.selectPage(Math.max(1, props.selectedPage - 1));
  }

  let searchSuffix = !props.searchText ? "" : ` for "${props.searchText}"`;

  return <div className="page-nav-summary">
    <div className="page-nav-summary__text">
      page <strong>{props.selectedPage} of {props.pageCount}</strong>,
      showing <strong>{props.data.length} of {props.totalCount} models</strong>{searchSuffix}
    </div>
    <div className="page-nav-summary__buttons">
      <button className="page-nav-summary__prev-button" onClick={() => selectPreviousPage()}
              disabled={props.selectedPage === 1} aria-label="Previous page">
        <Icon icon="arrow"/>
      </button>
      <button className="page-nav-summary__next-button" onClick={() => selectNextPage()}
              disabled={props.selectedPage === props.pageCount} aria-label="Next page">
        <Icon icon="arrow"/>
      </button>
    </div>
  </div>
}
