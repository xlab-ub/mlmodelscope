import React, {Component} from 'react';
import './PageNavigation.scss';
import Icon from "../Icon/Icon";

export default class PageNavigation extends Component {
  render() {
    const pages = [...Array(this.props.pageCount).keys()].map(x => x + 1);
    const {selectPage, selectedPage} = this.props;

    return (
      <div className="page-nav">
        <button className="page-nav__prev-button" onClick={this.selectPreviousPage} disabled={selectedPage === 1}>
          <Icon icon="arrow" />
          Previous
        </button>
        <div className="page-nav__page-buttons">
          { makePageButtons(pages) }
        </div>
        <button className="page-nav__next-button" onClick={this.selectNextPage} disabled={selectedPage === pages.length}>
          Next
          <Icon icon="arrow" />
        </button>
      </div>
    )

    function makePageButtons(pages) {
      if (pages.length < 6) {
        return pages.map(makePageButton);
      }
      let core = pages.slice(Math.max(0, selectedPage - 3), Math.min(pages.length + 1, selectedPage + 2));
      let buttons = [];

      if (!core.includes(1)) {
        buttons.push(makePageButton(1));

        if (selectedPage > 4)
          buttons.push(makeEllipsisButton(2));
      }

      buttons.push(...core.map(makePageButton));

      if (!core.includes(pages.length)) {
        if (selectedPage < pages.length - 3)
          buttons.push(makeEllipsisButton(pages.length - 1));

        buttons.push(makePageButton(pages.length));
      }

      return buttons;
    }

    function makePageButton(pageNumber) {
      const className = "page-nav__page-button";
      let classes = className;
      if (pageNumber === selectedPage)
        classes += ` ${className}--selected`;

      return <button className={classes} key={pageNumber} onClick={() => selectPage(pageNumber)}>{pageNumber}</button>;
    }

    function makeEllipsisButton(key) {
      return (<div className="page-nav__placeholder" key={key}><Icon icon="ellipsis" /></div>);
    }
  }

  selectNextPage = () => {
    const {pageCount, selectPage, selectedPage} = this.props;

    selectPage(Math.min(pageCount, selectedPage + 1));
  }

  selectPreviousPage = () => {
    const {selectPage, selectedPage} = this.props;

    selectPage(Math.max(1, selectedPage - 1));
  }
}
