import React from 'react';
import "./URLInputsTab.scss";
import useBEMNaming from "../../../../../common/useBEMNaming";
import {ReactComponent as PlusSign} from "../../../../../resources/icons/plus-sign.svg";
import useURLInputControl from "./useURLInputControl";


export default function URLInputsTab(props) {
  const {getBlock, getElement} = useBEMNaming("url-inputs");
  const {urlChanged, getUrlValidity, task, values} = useURLInputControl(props);


  const getInputClassName = (index) => getElement(getUrlValidity(index) ? "url url-error" : "url")
  return (
    <div className={getBlock()}>
      <div className={getElement('title')}><b>Copy {props.type} URL ({props.type} address) and paste</b>
        {" "}to {task.inputText.toLowerCase()}</div>
      {(values).map((value, index) => <>
        <input className={getInputClassName(index)} placeholder={`Paste any ${props.type} URL`} type="url" value={value}
               onChange={(e) => urlChanged(e, index)}/>
        {getUrlValidity(index) &&
          <p className={getElement("error-text")}>Not a valid URL. Right click on {props.type} to copy the {props.type}
            address.</p>}
      </>)}
      {props.multiple && <button onClick={props.addInput} className={getElement("add-btn")}><PlusSign
        className={getElement("add-btn-icon")}/> Add another URL</button>}

    </div>
  );
}

