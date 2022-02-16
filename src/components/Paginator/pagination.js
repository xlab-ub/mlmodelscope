import React, { Component } from "react";

export default function withPagination(WrappedComponent) {
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
      if (prevProps.data !== this.props.data) {
        this.setState(this.paginateData());
      }
    }

    paginateData() {
      const start = 12 * (this.props.selectedPage - 1);
      const end = 12 * this.props.selectedPage;
      const data = this.props.data.slice(start, end);
      const pageCount = parseInt(1 + this.props.data.length / 12);

      return {
        data,
        pageCount,
        selectedPage: 1
      }
    }

    selectPage(selectedPage) {
      this.setState({
        selectedPage
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} pageCount={this.state.pageCount} selectedPage={this.state.selectedPage} selectPage={this.selectPage} {...this.props} />;
    }
  }

  return Paginated;
}
