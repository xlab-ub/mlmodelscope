import React, {Component} from 'react';
import InputPreview from "./InputPreview";
import ClassificationOutput from "./Outputs/ClassificationOutput";

export default class QuickOutput extends Component {
  constructor(props) {
    super(props);
    this.classname = "quick-output";
  }

  render() {
    return (
      <div className={this.classname}>
        <div className={`${this.classname}__header`}>
          <div className={`${this.classname}__title`}>Try This Model</div>
          <button className={`${this.classname}__share-button`}>Share with community</button>
        </div>
        <div className={`${this.classname}__content`}>
          <InputPreview />
          <ClassificationOutput />
        </div>
        <div className={`${this.classname}__footer`}>
          <a className={`${this.classname}__try-again`}>Try this again</a>
          <button className={`${this.classname}__experiment-button`}>Use in advanced experiment</button>
        </div>
      </div>
    );
  }
}
