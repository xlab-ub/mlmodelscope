import React from 'react';
import "./RemoveModelModal.scss";
import BEMComponent from "../Common/BEMComponent";
import {ReactComponent as TrashIcon} from "../../resources/icons/trash.svg";
import Modal from "../Common/Modal/Modal";

export default class RemoveModelModal extends BEMComponent {
  static defaultProps = {
    className: "remove-model-modal"
  }

  render() {

    return <Modal icon={<TrashIcon className={this.element('trashcan')}/>}>
      <h2 className={this.element('heading')}>
        You are about to remove this model
      </h2>
      <p className={this.element('text')}>
        This will delete the model from this experiment.
      </p>
      <p className={this.element('warning')}>
        Are you sure you want to proceed?
      </p>
      <div className={this.element('controls')}>
        <button className={this.element('cancel')}>
          No, don't delete
        </button>
        <button className={this.element('confirm')}>
          Yes, remove
        </button>
      </div>
    </Modal>


  }
}
