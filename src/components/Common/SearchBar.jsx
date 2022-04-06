import React from "react";
import BEMComponent from "./BEMComponent";
import { ReactComponent as Cancel }  from '../../resources/icons/cancel.svg';
export default class SearchBar extends BEMComponent {
  static defaultProps = {
    className: 'search-bar'
  }
  onSearchChange = (e) => {
    this.props.updateSearchText(e.target.value);
  }
  clearSearch = () => {
    this.props.updateSearchText("");
  }
  getDismissClassName() {
    return  this.element(this.props.searchText === "" ? "tag--hidden" : "tag--visible");
  }

  render() {
    return (
      <span className={this.block()}>
        <input className={this.element("input")}
               type="text"
               placeholder="Search"
               name="search"
               id="search"
               onChange={this.onSearchChange}
               aria-label="Search models by name or description"
               value={this.props.searchText}/>
          <button className={this.getDismissClassName()} onClick={this.clearSearch}>
           <Cancel />

          </button>
      </span>

    );
  }
}
