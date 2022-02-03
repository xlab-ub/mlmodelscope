import React, { Component } from "react";
import { Dashboard } from "@uppy/react";
import GetApiHelper from "../../../helpers/api";
// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!uppy/dist/uppy.min.css";

const Uppy = require("@uppy/core");
const AwsS3Multipart = require("@uppy/aws-s3-multipart");
const Webcam = require("@uppy/webcam");

export default class UploadArea extends Component {
  constructor(props) {
    super(props);
    this.api = GetApiHelper();
    this.uppy = Uppy({
      onBeforeUpload: this.onBeforeUpload.bind(this),
      restrictions: { maxNumberOfFiles: 5 }
    });

    this.uppy.use(AwsS3Multipart, {
      limit: 5,
      companionUrl: process.env.REACT_APP_COMPANION_URL
    });

    this.uppy.use(Webcam);

    this.uppy.on('upload-success', (upload, response) => {
      console.log(`upload success:`, upload);
      console.log(`response:`, response);
    })
  }

  onBeforeUpload(files) {
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

  componentDidMount() {
    this.api.ActiveUser.subscribe({
      next: (user) => {
        this.setState({activeUserId: user.id});
      }
    });
  }

  render() {
    return (
      <div style={{ marginTop: "40px", color: "black", minWidth: 0 }}>
        <Dashboard plugins={["Tus", "Webcam"]} uppy={this.uppy} />
      </div>
    );
  }
}
