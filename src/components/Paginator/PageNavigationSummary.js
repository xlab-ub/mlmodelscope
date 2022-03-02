import React, {Component} from 'react';
import './PageNavigationSummary.scss';

export default class PageNavigationSummary extends Component {
  static defaultProps = {
    data: [],
    pageCount: 1,
    selectedPage: 1,
    totalCount: 0
  }
  render() {
    let searchSuffix = "";
    if(!!this.props.searchTerm) {
      searchSuffix = ` for "${this.props.searchTerm}"`;
    }
    return <div className="page-nav-summary">
      page <strong>{this.props.selectedPage} of {this.props.pageCount}</strong>, showing <strong>{this.props.data.length} of {this.props.totalCount} results</strong>{searchSuffix}
    </div>
  }
}
