import {ConfirmationModal} from "../../Common/Modal/Modal";
import {ReactComponent as ExclamationIcon} from "../../../resources/icons/exclamation.svg";
import React from "react";
import useBEMNaming from "../../../common/useBEMNaming";
import "./InputCannotBeRemovedModal.scss"

export default function InputCannotBeRemovedModal(props) {
  const {getElement} = useBEMNaming("input-cannot-be-removed-modal");


  return <ConfirmationModal icon={<ExclamationIcon className={getElement('trashcan')}/>} onCancel={props.onConfirm}>
    <h2 className={getElement('heading')}>
      Input cannot be removed
    </h2>
    <p className={getElement('text')}>
      There must be at least one input in the comparison.
    </p>
    <div className={getElement('controls')} onClick={props.onConfirm}>
      <button className={getElement('close')}>
        Okay, close window
      </button>
    </div>
  </ConfirmationModal>
}
