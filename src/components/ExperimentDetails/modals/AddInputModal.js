import React from "react";
import Modal from "../../Common/Modal/Modal";
import useBEMNaming from "../../../common/useBEMNaming";
import QuickInput from "../../Experiment/QuickInput/QuickInput";
import {image_classification} from "../../../helpers/TaskIDs";
import "./AddInputModal.scss";

export default function AddInputModal(props) {
    const {getElement} = useBEMNaming("add-input-modal");

    const onAdd = (urls) => {
        props.addInput(urls);
        props.close();
    }

    return <Modal onCancel={props.close}>
        <p className={getElement("heading")}> Choose an input </p>
        <div className={getElement("input-wrapper")}>
            <QuickInput model={{output: {type: image_classification}}} hideHeader
                        onRunModelClicked={onAdd} sampleInputs={props.sampleInputs} multiple/>
        </div>
    </Modal>
}
