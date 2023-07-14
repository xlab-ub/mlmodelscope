import React, { useState } from "react";
import useBEMNaming from "../../../common/useBEMNaming";
import Task from "../../../helpers/Task";
import "./QuickTextInput.scss";

export default function QuickTextInput(props) {
  const [value, setValue] = useState(props.defaultValue ?? "");

  const { getBlock, getElement } = useBEMNaming("quick-text-input");
  const task = Task.getStaticTask(props.model.output.type);

  const onSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <div className={getBlock()}>
      <h2 className={getElement("title")}>Try this model</h2>
      <div className={getElement("subtitle")}>{task.inputText}</div>

      <p className={getElement("help-text")}>[INSERT HELP TEXT HERE]</p>
      <textarea
        value={value}
        className={getElement("input")}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>

      <button
        disabled={value.length === 0}
        onClick={onSubmit}
        className={getElement("submit-button")}
      >
        Run model and see results
      </button>
    </div>
  );
}
