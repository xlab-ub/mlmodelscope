import React from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import OutputDuration from "../_Common/components/OutputDuration";
import useTextOutput from "./useTextOutput";
import Rating from "../Classification/Rating";

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

      <div className={getElement("results")}>
        <div className={getElement("title-row")}>
          <h3 className={getElement("title-row-title")}>Output</h3>
          <OutputDuration duration={inferenceDuration} />
        </div>

        <div className={getElement("output-container")}>
          <p className={getElement("output-container-text")}>{output}</p>
        </div>

        <Rating />
      </div>
    </div>
  );
}
