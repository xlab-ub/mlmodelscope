import React from "react";
import "./InputPreview.scss";
import useBEMNaming from "../../../common/useBEMNaming";

export default function InputPreview(props) {
  const { getBlock, getElement } = useBEMNaming("input-preview");

  return (
    <button
      className={getElement(
        `selection-btn ${props.isOpen && "selection-btn-active"}`
      )}
      onClick={props.toggleOpen}
    >
      <img
        className={getElement(`selection-btn-img`)}
        alt={"selected image"}
        src={props.selectedInput}
      />{" "}
      Input {props.selectedIndex + 1}
    </button>
  );
}
