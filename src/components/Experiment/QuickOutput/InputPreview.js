import React from 'react';
import "./InputPreview.scss";
import useBEMNaming from "../../../common/useBEMNaming";

const defaultProps = {
  className: "input-preview",
  input: "",
  onBackClicked: () => {
  }
};

export default function InputPreview(givenProps) {
  const props = {...defaultProps, ...givenProps};
  const { getBlock, getElement } = useBEMNaming(props.className);

  return (
    <div className={getBlock()}>
      <h3 className={getElement('title')}>Input Image</h3>
      <img className={getElement('image')} src={props.input}/>
      <button className={getElement('back-button')} onClick={props.onBackClicked}>
        Try a different image
      </button>
    </div>
  );
}
