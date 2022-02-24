import React, {Component} from 'react';
import Uppy from '@uppy/core';
import {Dashboard} from '@uppy/react';
import AwsS3Multipart from '@uppy/aws-s3-multipart';

export default class UploadInputsTab extends Component {
  constructor(props) {
    super(props);
    this.classname = "upload-inputs";
    this.uppy = Uppy({
      onBeforeUpload: this.onBeforeUpload,
      restrictions: { maxNumberOfFiles: 1 }
    });

    this.uppy.use(AwsS3Multipart, {
      limit: 5,
      companionUrl: process.env.REACT_APP_COMPANION_URL
    });

    this.uppy.on('upload-success', this.onUploadSuccess);
  }

  onBeforeUpload = (files) => {
    console.log(files);
    Object.keys(files)
      .forEach(key => {
        let file = files[key];
        files[key] = {
          ...file,
          name: `${this.state.activeUserId}/${file.name}`,
        }
      })

    return files;
  }

  onUploadSuccess = (file, response) => {
    if (typeof(this.props.inputSelected) === 'function')
      this.props.inputSelected(file.uploadURL);
  }

  render() {
    return (
      <div className={this.classname}>
        <Dashboard uppy={this.uppy} />
      </div>
    );
  }
}
