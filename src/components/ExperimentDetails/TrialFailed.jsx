import React from 'react';
import useBEMNaming from "../../common/useBEMNaming";
import {ReactComponent as ErrorIcon} from "../../resources/icons/process_failed.svg";

export default function TrialFailed() {
    const {getBlock, getElement} = useBEMNaming("trial-failed");

    return (
        <div className={getBlock()}>
            <div className={getElement("box")}>
                <ErrorIcon/>
                <p className={getElement("box-heading")}>Process Failed</p>
            </div>

        </div>
    )
}