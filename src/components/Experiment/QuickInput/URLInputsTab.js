import React, {Component} from 'react';

const UrlMatcher = /https?:\/\/.+/;

export default class URLInputsTab extends Component {
  constructor(props) {
    super(props);
    this.classname = "url-inputs";
  }

  render() {
    return (
      <div className={this.classname}>
        <div className={`${this.classname}__title`}>Paste URL of image</div>
        <input className={`${this.classname}__url`} type="url" onChange={this.urlChanged} />
      </div>
    );
  }

  urlChanged = (event) => {
    const url = event.target.value;

    if (url.match(UrlMatcher) === null)
      return;

    if (typeof(this.props.inputSelected) === 'function')
      this.props.inputSelected(url);
  }
}
