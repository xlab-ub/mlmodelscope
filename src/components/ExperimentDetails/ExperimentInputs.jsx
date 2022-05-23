import useBEMNaming from "../../common/useBEMNaming";
import React, {useState} from "react";
import "./ExperimentInputs.scss";
import {ReactComponent as DeleteIcon} from "../../resources/icons/delete.svg";
import Button from "../Buttons/Button";

export const ExperimentInputs = (props) => {
  const {getBlock, getElement} = useBEMNaming("experiment-inputs");

  const [isOpen, setIsOpen] = useState(false);


  const selectedIndex = props.inputs.indexOf(props.selectedInput);

  return <div className={getBlock()}>
    <div className={getElement("selection-area")}>

      <button onClick={() => setIsOpen(!isOpen)}
              className={getElement(`selection-btn ${isOpen && "selection-btn-active"}`)}><img
        className={getElement(`selection-btn-img`)} alt={"selected image"}
        src={props.selectedInput}/> Input {selectedIndex + 1}</button>

      {isOpen &&
        <div className={getElement("input-selectors")}>
          {props.inputs.map((input, idx) => <div
            className={getElement(`input-selector-btn ${idx === selectedIndex && "input-selector-btn-selected"}`)}>
            <button onClick={() => props.selectInput(input)} className={getElement("input-selector-btn-content")}>
              <img
                alt={`Input ${idx + 1}`}
                className={getElement("input-selector-img")} src={input}/>
              Input {idx + 1}
            </button>
            <button onClick={() => props.showDeleteInputModal(input)} className={getElement("input-selector-delete")}>
              <DeleteIcon/></button>
          </div>)}
          <div className={getElement("add-input-area")}>
            <button onClick={props.showAddInputModal} className={getElement("add-input-area-btn")}>
              Add Input
            </button>
          </div>
        </div>
      }
    </div>

    <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false}
            link={props.getAddModelsLink(props)}/>
  </div>
}
