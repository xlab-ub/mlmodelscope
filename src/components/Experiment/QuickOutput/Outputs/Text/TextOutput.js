import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import useTextOutput from "./useTextOutput";
import { TextOutputBox } from "./TextOutputBox";

export default function TextOutput(props) {
  const { getBlock, getElement } = useBEMNaming("text-output");
  const { output, inferenceDuration, input, setInput } = useTextOutput(
    props.trial
  );

  const onSubmit = () => {
    props.onSubmit(input);
  };

  return (
    <div className={getBlock()}>
      <div className={getElement("input")}>
        <h3 className={getElement("input-title")}>Input Text</h3>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={getElement("input-container-text")}
        ></textarea>

        <button
          onClick={onSubmit}
          className={getElement("input-submit-button")}
        >
          Rerun Model
        </button>
      </div>

      <TextOutputBox duration={inferenceDuration} output={output} />
    </div>
  );
}
