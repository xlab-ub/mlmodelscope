import React from "react";
import "../Text/TextOutput.scss";
import useBEMNaming from "../../../../../common/useBEMNaming";
import useTextOutput from "../Text/useTextOutput";
import OutputDuration from "../_Common/components/OutputDuration";
import SyntaxHighlighter from "react-syntax-highlighter";
import Rating from "../Classification/Rating";
import TextOutputInputSection from "../Text/TextOutputInputSection";
import { textToCode } from "../../../../../helpers/TaskIDs";
import Task from "../../../../../helpers/Task";

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
          <SyntaxHighlighter showLineNumbers language="python">
            {output}
          </SyntaxHighlighter>
        </div>

        <Rating />
      </div>
    </div>
  );
}
