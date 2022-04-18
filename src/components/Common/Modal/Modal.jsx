import React from 'react';
import {ReactComponent as CloseIcon} from "../../../resources/icons/x.svg";
import './Modal.scss';
import useBEMNaming from "../../../common/useBEMNaming";

export default function Modal(props) {
  const {getElement, getBlock} = useBEMNaming("modal");

  const icon = props.icon || <CloseIcon className={getElement('trashcan')}/>;
  const content = props.children || <>WARNING: NO CONTENT!</>



  return <div className={getBlock()}>
    <div className={getElement('content-container')}>
      <div className={getElement('content')}>
        <div className={getElement('top-icon')}>
          {icon}
        </div>
        <button className={getElement('close-button')}>
          <CloseIcon/>
        </button>
        {content}
      </div>
    </div>
  </div>
}
