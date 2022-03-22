import React from 'react';
import Uppy from '@uppy/core';
import {Dashboard} from '@uppy/react';
import AwsS3Multipart from '@uppy/aws-s3-multipart';
import BEMComponent from "../../Common/BEMComponent";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "./UploadInputsTab.scss";
import GetApiHelper from "../../../helpers/api";

export default class UploadInputsTab extends BEMComponent {
  static defaultProps = {
    className: "upload-inputs"
  }

  constructor(props) {
    super(props);

    this.api = GetApiHelper();
    this.uppy = Uppy({
      onBeforeUpload: this.onBeforeUpload,
      restrictions: { maxNumberOfFiles: 1 }
    });

    this.uppy.use(AwsS3Multipart, {
      limit: 5,
      companionUrl: process.env.REACT_APP_COMPANION_URL
    });

    this.uppy.on('complete', this.onComplete.bind(this));
  }

  onBeforeUpload = (files) => {
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

  onComplete = (result) => {
    if (typeof(this.props.inputSelected) === 'function')
      this.props.inputSelected(result.successful.map(x => x.uploadURL));
  }

  componentDidMount() {
    this.api.ActiveUser.subscribe({
      next: (user) => {
        this.setState({activeUserId: user.id});
      }
    });
  }

  render() {
    return (
      <div className={this.block()}>
        <Dashboard uppy={this.uppy} />
      </div>
    );
  }
}
