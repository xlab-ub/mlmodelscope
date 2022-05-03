import React, {useState} from 'react';
import "./URLInputsTab.scss";
import ImageVerifier from "../../../helpers/imageVerifier";
import useBEMNaming from "../../../common/useBEMNaming";

const UrlMatcher = /https?:\/\/.+/;

export default function URLInputsTab(props) {
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const {getBlock, getElement} = useBEMNaming("url-inputs");

  const urlChanged = async (event) => {
    let url = event.target.value;

    if (url.match(UrlMatcher) === null)
      url = "";
    else {
      let verifier = new ImageVerifier(url);
      if (!(await verifier.Verify()))
        url = "";
    }
    setIsInvalidUrl(url === "" && event.target.value !== "");

    if (typeof (props.inputSelected) === 'function') {
      props.inputSelected(url);

    }
  }

  const getInputClassName = () => getElement(isInvalidUrl ? "url url-error" : "url")

  return (
    <div className={getBlock()}>
      <div className={getElement('title')}>Copy and paste an image address</div>
      <input className={getInputClassName()} placeholder="Paste any image URL" type="url" onChange={urlChanged}/>
      {isInvalidUrl &&
        <p className={getElement("error-text")}>This is not a valid url. Copy and past an image address.</p>}
    </div>
  );
}

