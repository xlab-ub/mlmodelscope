import React, {Component} from 'react';
import './PageNavigationSummary.scss';
import Icon from "../Icon/Icon";

export default class PageNavigationSummary extends Component {
  static defaultProps = {
    data: [],
    pageCount: 1,
    selectedPage: 1,
    totalCount: 0,
    selectPage: () => {},
  }
  render() {
    let searchSuffix = !this.props.searchText ? "" : ` for "${this.props.searchText}"`;

    return <div className="page-nav-summary">
      <div className="page-nav-summary__text">
        page <strong>{this.props.selectedPage} of {this.props.pageCount}</strong>, showing <strong>{this.props.data.length} of {this.props.totalCount} models</strong>{searchSuffix}
      </div>
      <div className="page-nav-summary__buttons">
        <button className="page-nav-summary__prev-button" onClick={() => this.selectPreviousPage()} disabled={this.props.selectedPage === 1} aria-label="Previous page">
          <Icon icon="arrow" />
        </button>
        <button className="page-nav-summary__next-button" onClick={() => this.selectNextPage()} disabled={this.props.selectedPage === this.props.pageCount} aria-label="Next page">
          <Icon icon="arrow" />
        </button>
      </div>
    </div>
  }

  selectNextPage() {
    this.props.selectPage(Math.min(this.props.pageCount, this.props.selectedPage + 1));
  }

  selectPreviousPage() {
    this.props.selectPage(Math.max(1, this.props.selectedPage - 1));
  }
}
