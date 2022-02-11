import React, { Component } from "react";

export default function withPagination(WrappedComponent, dataSubject) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.selectPage = this.selectPage.bind(this);
      this.dataSubject = dataSubject;
      this.state = {
        data: [],
        pageCount: 0,
        selectedPage: 0
      };
    }

    selectPage(selectedPage) {
      this.setState({
        selectedPage
      })
    }

    componentDidMount() {
      this.dataSubscription = this.dataSubject.subscribe({
        next: (data) => {
          this.setState({
            data
          });
        }
      });
    }

    componentWillUnmount() {
      this.dataSubscription.unsubscribe();
    }

    render() {
      return <WrappedComponent data={this.state.data} pageCount={this.state.pageCount} selectedPage={this.state.selectedPage} selectPage={this.selectPage} {...this.props} />;
    }
  }
}
