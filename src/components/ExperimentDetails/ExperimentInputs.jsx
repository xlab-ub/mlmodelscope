import useBEMNaming from "../../common/useBEMNaming";
import React, {useEffect, useRef, useState} from "react";
import "./ExperimentInputs.scss";
import {ReactComponent as DeleteIcon} from "../../resources/icons/delete.svg";
import Button from "../Buttons/Button";

export const ExperimentInputs = (props) => {
  const {getBlock, getElement} = useBEMNaming("experiment-inputs");

  const [isOpen, setIsOpen] = useState(false);

  const handlerRef = useRef(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    function handleClick(event) {
      if (handlerRef.current && !handlerRef.current.contains(event.target))
        close();
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [isOpen]);

  const selectedIndex = props.inputs.indexOf(props.selectedInput);

  const hasNoInputs = props.inputs.length === 0 || props.inputs[0] === "";

  const handleSelect = (input) => {
    setIsOpen(false);
    props.selectInput(input);
  }

  if (hasNoInputs)
    return <div className={getElement("ghost-card")}>
      <button onClick={props.showAddInputModal} className={getElement("add-input-area-btn")}>
        Add Input
      </button>
    </div>

  return <div className={getBlock()}>
    <div ref={handlerRef} className={getElement("selection-area")}>

      <button onClick={() => setIsOpen(!isOpen)}
              className={getElement(`selection-btn ${isOpen && "selection-btn-active"}`)}><img
        className={getElement(`selection-btn-img`)} alt={"selected image"}
        src={props.selectedInput}/> Input {selectedIndex + 1}</button>

      {isOpen &&
        <div className={getElement("input-selectors")}>
          {props.inputs.map((input, idx) => <div
            className={getElement(`input-selector-btn ${idx === selectedIndex && "input-selector-btn-selected"}`)}>
            <button onClick={() => handleSelect(input)} className={getElement("input-selector-btn-content")}>
              <img
                alt={`Input ${idx + 1}`}
                className={getElement("input-selector-img")} src={input}/>
              Input {idx + 1}
            </button>
            <button onClick={() => props.showDeleteInputModal(input)}
                    className={getElement(`input-selector-delete ${idx === selectedIndex && "input-selector-delete-selected"}`)}>
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
