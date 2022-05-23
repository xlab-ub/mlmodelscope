import React, {useState} from 'react';
import "./URLInputsTab.scss";
import ImageVerifier from "../../../helpers/imageVerifier";
import useBEMNaming from "../../../common/useBEMNaming";
import {ReactComponent as PlusSign} from "../../../resources/icons/plus-sign.svg";

const UrlMatcher = /https?:\/\/.+/;

export default function URLInputsTab(props) {
  const [isInvalidUrl, setIsInvalidUrl] = useState([false]);
  const {getBlock, getElement} = useBEMNaming("url-inputs");

  const urlChanged = async (event, index) => {
    event.persist();
    let url = event.target.value;
    let tempUrl = event.target.value;
    if (tempUrl.match(UrlMatcher) === null)
      tempUrl = "";
    else {
      let verifier = new ImageVerifier(tempUrl);
      if (!(await verifier.Verify()))
        tempUrl = "";
    }
    let currentInvalidUrl = isInvalidUrl;
    currentInvalidUrl[index] = tempUrl === "" && url !== "";
    setIsInvalidUrl(currentInvalidUrl);

    if (typeof (props.inputSelected) === 'function') {
      props.inputSelected(url, index);

    }
  }

  const getUrlValidity = (index) => isInvalidUrl[index];

  const getInputClassName = (index) => getElement(getUrlValidity(index) ? "url url-error" : "url")
  let values = props.values;
  if (!values || values.length === 0) values = [""];
  return (
    <div className={getBlock()}>
      <div className={getElement('title')}>Copy an image URL (image address) and paste.</div>
      {(values).map((value, index) => <>
        <input className={getInputClassName(index)} placeholder="Paste any image URL" type="url" value={value}
               onChange={(e) => urlChanged(e, index)}/>
        {getUrlValidity(index) &&
          <p className={getElement("error-text")}>Not a valid URL. Right click on an image to copy the image
            address.</p>}
      </>)}
      {props.multiple && <button onClick={props.addInput} className={getElement("add-btn")}><PlusSign
        className={getElement("add-btn-icon")}/> Add another URL</button>}

    </div>
  );
}

