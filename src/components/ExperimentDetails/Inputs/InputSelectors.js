import React from "react";
import { ReactComponent as DeleteIcon } from "../../../resources/icons/delete.svg";
import "./InputSelectors.scss";
import useBEMNaming from "../../../common/useBEMNaming";
import { TaskInputTypes } from "../../../helpers/TaskInputTypes";

export default function InputSelectors(props) {
  const { getBlock, getElement } = useBEMNaming("input-selector");

  const getInputPreviewContent = (input, index) => {
    if (props.task.inputType === TaskInputTypes.Text) return <>{input}</>;

    return (
      <>
        <img
          alt={`Input ${index + 1}`}
          className={getElement("input-selector-img")}
          src={input}
        />
        Input {index + 1}
      </>
    );
  };

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
            {getInputPreviewContent(input, idx)}
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
