import React from 'react';
import "./RemoveModelModal.scss";
import {ReactComponent as TrashIcon} from "../../resources/icons/trash.svg";
import {ConfirmationModal} from "../Common/Modal/Modal";
import useBEMNaming from "../../common/useBEMNaming";

const defaultProps = {
    className: "remove-model-modal"
}
export default function RemoveModelModal(givenProps) {
    const props = {...defaultProps, ...givenProps};

    const {getElement} = useBEMNaming(props.className);

    return <ConfirmationModal icon={<TrashIcon className={getElement('trashcan')}/>}
                              onCancel={props.onCancel}>
        <h2 className={getElement('heading')}>
            You are about to remove this model
        </h2>
        <p className={getElement('text')}>
            This will delete all outputs created with this model
        </p>
        <p className={getElement('warning')}>
            Are you sure you want to proceed?
        </p>
        <div className={getElement('controls')}>
            <button className={getElement('cancel')} onClick={props.onCancel}>
                No, don’t remove
            </button>
            <button className={getElement('confirm')} onClick={props.onConfirm}>
                Yes, remove
            </button>
        </div>
    </ConfirmationModal>
}
