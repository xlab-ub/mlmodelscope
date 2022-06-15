import React from 'react';
import "./SampleInputsTab.scss";
import Task from "../../../../../helpers/Task";
import useSampleInputControl from "./useSampleInputControl";
import useBEMNaming from "../../../../../common/useBEMNaming";

export default function SampleInputsTab(props) {
  const {getBlock, getElement} = useBEMNaming("sample-inputs");
  const {isUnselected, isSelected, selectedIndex, selectInput} = useSampleInputControl(props);

  const getImageClassName = (url) => {
    let className = "input";
    if (isSelected(url)) className += " input--selected";
    if (isUnselected(url)) className += " input--unselected";

    return className;
  }

  const makeSampleInput = (url, index) => {
    return (
      <button onClick={() => selectInput(index)} key={index} className={getElement(getImageClassName(url))}>
        <img src={url.src} alt={url.alt}/>
      </button>
    )
  }

  const task = Task.getStaticTask(props.task);
  const sampleInputs = props.sampleInputs ?? [];
  return (
    <div className={getBlock()}>
      <div className={getElement('title')}><b>Select a sample image</b> to {task.inputText.toLowerCase()}</div>
      <div className={getElement('list')}>
        {sampleInputs.map(makeSampleInput)}
      </div>
    </div>
  );
}

