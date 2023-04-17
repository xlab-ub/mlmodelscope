import React from "react";
import {ReactComponent as Cancel} from '../../resources/icons/x.svg';
import "./_SearchBar.scss";
import useBEMNaming from "../../common/useBEMNaming";

const defaultProps = {
    className: 'search-bar'

}
export default function SearchBar(givenProps) {
    const props = {...defaultProps, ...givenProps};

    const {getBlock, getElement} = useBEMNaming(props.className);

    const onSearchChange = (e) => {
        props.updateSearchText(e.target.value);
    }
    const clearSearch = () => {
        props.updateSearchText("");
    }

    const getDismissClassName = () => {
        return getElement(props.searchText === "" ? "tag--hidden" : "tag--visible");
    }

    return (
        <span className={getBlock()}>
        <input className={getElement("input")}
               type="text"
               placeholder="Search"
               name="search"
               id="search"
               onChange={onSearchChange}
               aria-label="Search models by name or description"
               value={props.searchText}/>
          <button className={getDismissClassName()} onClick={clearSearch}>
           <Cancel/>
          </button>
      </span>
    );
}
