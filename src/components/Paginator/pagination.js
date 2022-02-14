import React, { Component } from "react";

export default function withPagination(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.selectPage = this.selectPage.bind(this);
      this.state = {
        data: [],
        pageCount: 0,
        selectedPage: 0
      };
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
      if (prevProps.data !== this.props.data) {
        this.setState({
          data: this.props.data
        });
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
}
