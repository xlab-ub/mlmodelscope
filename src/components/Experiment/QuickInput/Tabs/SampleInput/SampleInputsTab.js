import React from 'react';
import "./SampleInputsTab.scss";
import Task from "../../../../../helpers/Task";
import useSampleInputControl from "./useSampleInputControl";
import useBEMNaming from "../../../../../common/useBEMNaming";
import { QuickInputType } from "../../quickInputType";

export default function SampleInputsTab(props) {
    const { getBlock, getElement } = useBEMNaming("sample-inputs");
    const { isUnselected, isSelected, selectedIndex, selectInput, type } = useSampleInputControl(props);

    const getInputClassName = (url) => {
        let className = `input-${type}`;
        if (isSelected(url)) className += ` ${className}--selected`;
        if (isUnselected(url)) className += ` ${className}--unselected`;

        return className;
    };

    const makeSampleInput = (url, index) => {
        switch (props.type) {
            case QuickInputType.Image:
                return makeSampleImageInput(url, index);
            case QuickInputType.Text:
                return makeSampleTextInput(url, index);
            case QuickInputType.Video:
                return makeSampleVideoInput(url, index);
        }
    };

    function makeSampleImageInput(url, index) {
        return (
            <button onClick={() => selectInput(index)} key={index} className={getElement(getInputClassName(url))}>
                <img src={url.src} alt={url.alt} />
            </button>
        );
    }
    function makeSampleVideoInput(url, index) {
        return (
            <button onClick={() => selectInput(index)} key={index} className={getElement(getInputClassName(url))}>
                {/* <img src={url.src} alt={url.alt} /> */}

                <video muted autoPlay >
                    <source src={url.src} type="video/mp4" />
                </video> 
            </button>
        );
    }

    function makeSampleTextInput(text, index) {
        return (
            <button onClick={() => selectInput(index)} key={index} className={getElement(getInputClassName(text))}>
                <div>{text}</div>
            </button>
        );
    }

    const task = Task.getStaticTask(props.task);
    const sampleInputs = task.sampleInputs ?? props.sampleInputs ?? [];

    return (
        <div className={getBlock()}>
            <div className={getElement('title')}><b>{makeTaskTitle(props)}</b> to {task.inputText.toLowerCase()}</div>
            <div className={getElement('list')}>
                {sampleInputs.map(makeSampleInput)}
            </div>
        </div>
    );

    function makeTaskTitle(props) {
        switch (props.type) {
            case QuickInputType.Image:
                return "Select an image";
            case QuickInputType.Text:
                return "Select text";
            case QuickInputType.Video:
                return "Select a video";
        }
    }
}

