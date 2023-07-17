import React from "react";
import { ReactComponent as DeleteIcon } from "../../../resources/icons/delete.svg";
import "./InputSelectors.scss";
import useBEMNaming from "../../../common/useBEMNaming";

export default function InputSelectors(props) {
  const { getBlock, getElement } = useBEMNaming("input-selector");
  return (
    <div className={getBlock()}>
      {props.inputs.map((input, idx) => (
        <div
          className={getElement(
            `input-selector-btn ${
              idx === props.selectedIndex && "input-selector-btn-selected"
            }`
          )}
        >
          <button
            onClick={() => props.handleSelect(input)}
            className={getElement("input-selector-btn-content")}
          >
            <img
              alt={`Input ${idx + 1}`}
              className={getElement("input-selector-img")}
              src={input}
            />
            Input {idx + 1}
          </button>
          <button
            onClick={() => props.showDeleteInputModal(input)}
            className={getElement(
              `input-selector-delete ${
                idx === props.selectedIndex && "input-selector-delete-selected"
              }`
            )}
          >
            <DeleteIcon />
          </button>
        </div>
      ))}
      <div className={getElement("add-input-area")}>
        <button
          onClick={props.showAddInputModal}
          className={getElement("add-input-area-btn")}
        >
          Add Input
        </button>
      </div>
    </div>
  );
}
