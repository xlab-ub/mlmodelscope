import React, {Component} from 'react';

export default class UploadInputsTab extends Component {
  constructor(props) {
    super(props);
    this.classname = "upload-inputs";
  }

  render() {
    return (
      <div className={this.classname} />
    );
  }
}
