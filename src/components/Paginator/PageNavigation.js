import React, {Component} from 'react';

export default class PageNavigation extends Component {
  render() {
    const pages = [...Array(this.props.pageCount).keys()].map(x => x + 1);
    const {selectPage, selectedPage} = this.props;

    return (
      <div className="page-nav">
        <div className="page-nav__prev-button" onClick={this.selectPreviousPage}>Previous</div>
        <div className="page-nav__page-buttons">
          { makePageButtons(pages) }
        </div>
        <div className="page-nav__next-button" onClick={this.selectNextPage}>Next</div>
      </div>
    )

    function makePageButtons(pages) {
      if (pages.length < 5) {
        return pages.map(makePageButton);
      }

      return [
        ...pages.slice(0, 3).map(makePageButton),
        (<div className="page-nav__placeholder" key={4}>...</div>),
        ...pages.slice(-1).map(makePageButton)
      ];
    }

    function makePageButton(pageNumber) {
      const className = "page-nav__page-button";
      let classes = className;
      if (pageNumber === selectedPage)
        classes += ` ${className}--selected`;

      return <div className={classes} key={pageNumber} onClick={() => selectPage(pageNumber)}>{pageNumber}</div>;
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
