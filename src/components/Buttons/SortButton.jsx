import React, {useState} from "react";
import {ReactComponent as SortBars} from "../../resources/icons/sort-bars.svg";

export default function SortButton(props) {
  const [optionsHidden, setOptionsHidden] = useState(true);

  const preventFocus = (e) => {
    e.preventDefault();
  }

  const onOptionClick = (isAscending) => {
    if (!!props.updateSortByNameIsAscending) {
      props.updateSortByNameIsAscending(isAscending);
    }
    document.activeElement.blur();
    setOptionsHidden(true);
  }

  return (
    <div className="sort-button">
      <button className="sort-button__button" onClick={() => setOptionsHidden(false)} onFocus={() => setOptionsHidden(false)}
              onBlur={() => setOptionsHidden(true)}>
        <SortBars className="sort-button__icon"/>
        Sort by
      </button>
      <div className="sort-button__option-box" hidden={optionsHidden}>
        <input className="sort-button__radio" type="radio" id="name-ascend" name="sort-option" value="true"
               defaultChecked={props.isSortAscending}/>
        <label className="sort-button__option" htmlFor="name-ascend" onMouseDown={preventFocus}
               onClick={() => onOptionClick(true)}>Name ascending</label>
        <input className="sort-button__radio" type="radio" id="name-descend" name="sort-option" value="false"
               defaultChecked={!props.isSortAscending}/>
        <label className="sort-button__option" htmlFor="name-descend" onMouseDown={preventFocus}
               onClick={() => onOptionClick(false)}>Name descending</label>
      </div>
    </div>
  );
}
