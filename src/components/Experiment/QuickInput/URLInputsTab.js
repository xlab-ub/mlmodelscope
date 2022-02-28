import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import "./URLInputsTab.scss";

const UrlMatcher = /https?:\/\/.+/;

export default class URLInputsTab extends BEMComponent {
  static defaultProps = {
    className: "url-inputs"
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('title')}>Paste URL of image</div>
        <input className={this.element('url')} placeholder="Paste any image URL" type="url" onChange={this.urlChanged} />
      </div>
    );
  }

  urlChanged = (event) => {
    let url = event.target.value;

    if (url.match(UrlMatcher) === null)
      url = "";

    if (typeof(this.props.inputSelected) === 'function')
      this.props.inputSelected(url);
  }
}
