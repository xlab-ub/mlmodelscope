import React from 'react';
import useBEMNaming from "../../../../../../common/useBEMNaming";

export default function SingleColumnImageOutput(props) {
  const {getElement, getBlock} = useBEMNaming("single-column-image-output");


  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-heading")}>Enhanced Image Output</h3>
      <p className={getElement("header-subheading")}>The enhanced image</p>
    </div>
    <div className={getElement("content")}>
      {props.image}

    </div>
  </div>
}
