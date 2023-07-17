import React from "react";
import useBEMNaming from "../../../common/useBEMNaming";
import "./NoInputs.scss";

export default function NoInputs(props) {
  const { getBlock, getElement } = useBEMNaming("no-inputs");

  return (
    <div className={getBlock()}>
      <button
        onClick={props.showAddInputModal}
        className={getElement("button")}
      >
        Add Input
      </button>
    </div>
  );
}
