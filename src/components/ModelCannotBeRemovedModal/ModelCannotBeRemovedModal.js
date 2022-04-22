import React from 'react';
import useBEMNaming from "../../common/useBEMNaming";
import {ReactComponent as ExclamationIcon} from "../../resources/icons/exclamation.svg";
import './ModelCannotBeRemovedModal.scss';
import Modal from "../Common/Modal/Modal";

export default function ModelCannotBeRemovedModal(props) {
  const {getElement} = useBEMNaming("model-cannot-be-removed-modal");

  return <Modal icon={<ExclamationIcon className={getElement('trashcan')}/>} onCancel={props.onConfirm}>
    <h2 className={getElement('heading')}>
      Model cannot be removed.
    </h2>
    <p className={getElement('text')}>
      There must be at least one model in the comparison.
    </p>
    <div className={getElement('controls')} onClick={props.onConfirm}>
      <button className={getElement('close')}>
        Okay, close window
      </button>
    </div>
  </Modal>

}
