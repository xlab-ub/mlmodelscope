import React from "react";
import "./UploadTextInputTab.scss";
import useBEMNaming from "../../../../../common/useBEMNaming";
import useUploadTextInputControl from "./useUploadTextInputControl";
import {Dashboard} from "@uppy/react";

export default function UploadTextInputTab(props) {
    const {getBlock, getElement} = useBEMNaming('text-upload');
    const {task, uppy} = useUploadTextInputControl(props);

    return (
        <div className={getBlock()}>
            <p className={getElement('help-text')}>
                <b>Upload a text file</b> to {task.inputText}
            </p>
            <Dashboard uppy={uppy} width={"100%"} />
        </div>
    );
}