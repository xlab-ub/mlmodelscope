import React, {Component} from 'react';

export default class URLInputsTab extends Component {
  constructor(props) {
    super(props);
    this.classname = "url-inputs";
  }

  render() {
    return (
      <div className={this.classname} />
    );
  }
}
