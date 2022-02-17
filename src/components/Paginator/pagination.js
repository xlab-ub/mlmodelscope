import React, { Component } from "react";
import PageNavigation from "./PageNavigation";

export default function withPagination(WrappedComponent, dataPropertyName) {
  class Paginated extends Component {
    static defaultProps = {
      data: [],
      pageCount: 1,
      selectedPage: 1
    }

    constructor(props) {
      super(props);
      this.selectPage = this.selectPage.bind(this);
      this.state = this.paginateData();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
      if (prevState.data !== this.state.data || prevState.selectedPage !== this.state.selectedPage) {
        this.setState(this.paginateData());
      }
    }

    paginateData() {
      const selectedPage = this.state ? this.state.selectedPage : this.props.selectedPage;
      const start = 12 * (selectedPage - 1);
      const end = 12 * selectedPage;
      const pageData = this.props.data.slice(start, end);
      const pageCount = parseInt(1 + this.props.data.length / 12);

      return {
        pageData,
        pageCount,
        selectedPage
      }
    }

    selectPage(selectedPage) {
      this.setState({
        selectedPage
      });
    }

    render() {
      let wrappedProps = {}
      wrappedProps[dataPropertyName] = this.state.pageData;

      return (
        <div className="paginated-content">
          <WrappedComponent pageCount={this.state.pageCount} selectedPage={this.state.selectedPage} {...this.props} {...wrappedProps} />
          <PageNavigation pageCount={this.state.pageCount} selectedPage={this.state.selectedPage} selectPage={this.selectPage} />
        </div>
      );
    }
  }

  return Paginated;
}
