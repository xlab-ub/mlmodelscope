import React from 'react';
import {ReactComponent as CloseIcon} from "../../../resources/icons/x.svg";
import './Modal.scss';
import useBEMNaming from "../../../common/useBEMNaming";

export default function Modal(props) {
  const {getElement, getBlock} = useBEMNaming("modal");

  const content = props.children || <>WARNING: NO CONTENT!</>


  return <div className={getBlock()}>
    <div className={getElement('content-container')}>
      <div className={getElement('content')}>
        <button className={getElement('close-button')}>
          <CloseIcon onClick={props.onCancel}/>
        </button>
        {content}
      </div>
    </div>
  </div>
}

export function ConfirmationModal(props) {
  const {getElement} = useBEMNaming("modal");

  const icon = props.icon || <CloseIcon className={getElement('trashcan')}/>;
  const content = props.children || <>WARNING: NO CONTENT!</>


  return <Modal onCancel={props.onCancel}>
    <div className={getElement('top-icon')}>
      {icon}
    </div>
    {content}
  </Modal>
}
