import React from 'react';
import "./RemoveModelModal.scss";
import BEMComponent from "../Common/BEMComponent";
import {ReactComponent as TrashIcon} from "../../resources/icons/trash.svg";
import {ConfirmationModal} from "../Common/Modal/Modal";

export default class RemoveModelModal extends BEMComponent {
  static defaultProps = {
    className: "remove-model-modal"
  }

  render() {

    return <ConfirmationModal icon={<TrashIcon className={this.element('trashcan')}/>} onCancel={this.props.onCancel}>
      <h2 className={this.element('heading')}>
        You are about to remove this model
      </h2>
      <p className={this.element('text')}>
        This will delete all outputs created with this model
      </p>
      <p className={this.element('warning')}>
        Are you sure you want to proceed?
      </p>
      <div className={this.element('controls')}>
        <button className={this.element('cancel')} onClick={this.props.onCancel}>
          No, don’t remove
        </button>
        <button className={this.element('confirm')} onClick={this.props.onConfirm}>
          Yes, remove
        </button>
      </div>
    </ConfirmationModal>


  }
}
