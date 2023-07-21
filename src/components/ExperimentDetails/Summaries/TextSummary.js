import useBEMNaming from "../../../common/useBEMNaming";
import React from "react";
import useTextOutput from "../../Experiment/QuickOutput/Outputs/Text/useTextOutput";
import "./TextSummary.scss";

export default function TextSummary(props) {
  const { getBlock, getElement } = useBEMNaming("text-summary");
  const { output } = useTextOutput(props.trial);

  return (
    <div className={getBlock()}>
      <p className={getElement("subtitle")}>Output:</p>
      <p className={getElement("output")}>{output}</p>
    </div>
  );
}
