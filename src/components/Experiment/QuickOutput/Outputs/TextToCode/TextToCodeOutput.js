import React from "react";
import "../Text/TextOutput.scss";
import useBEMNaming from "../../../../../common/useBEMNaming";
import useTextOutput from "../Text/useTextOutput";
import OutputDuration from "../_Common/components/OutputDuration";
import Rating from "../Classification/Rating";
import TextOutputInputSection from "../Text/TextOutputInputSection";
import { textToCode } from "../../../../../helpers/TaskIDs";
import Task from "../../../../../helpers/Task";
import { CodePreview } from "../_Common/components/CodePreview";

export default function TextToCodeOutput(props) {
  const { getBlock, getElement } = useBEMNaming("text-to-code-output");
  const { inferenceDuration, output, input, setInput } = useTextOutput(
    props.trial
  );
  const task = Task.getStaticTask(textToCode);

  const onSubmit = () => {
    props.onSubmit(input);
  };

  return (
    <div className={getBlock()}>
      <TextOutputInputSection
        input={input}
        setInput={setInput}
        onSubmit={onSubmit}
      />

      <div className={getElement("results")}>
        <div className={getElement("title-row")}>
          <h3 className={getElement("title-row-title")}>Output</h3>
          <OutputDuration duration={inferenceDuration} />
        </div>
        <p className={getElement("subtitle")}>{task.outputText}</p>
        <div className={getElement("output-container")}>
          <CodePreview>{output}</CodePreview>
        </div>

        <Rating />
      </div>
    </div>
  );
}
