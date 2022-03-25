import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import "./InputPreview.scss";

export default class InputPreview extends BEMComponent {
  static defaultProps = {
    className: "input-preview",
    input: "",
    onBackClicked: () => {}
  }

  render() {
    return (
      <div className={this.block()}>
        <h3 className={this.element('title')}>Input Image</h3>
        <img className={this.element('image')} src={this.props.input} />
        <button className={this.element('back-button')} onClick={this.props.onBackClicked}>Try a different image</button>
      </div>
    );
  }
}
