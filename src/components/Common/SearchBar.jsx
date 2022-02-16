import React, {Component} from "react";
import { ReactComponent as MagnifyingGlass } from "../../resources/icons/magnifying-glass.svg";

export default class SearchBar extends Component {
  onSearchChange = (e) => {
    this.props.updateSearchText(e.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <MagnifyingGlass className="search-bar__icon" />
        <input className="search-bar__input" type="search" placeholder="Search" name="search" id="search" onChange={this.onSearchChange} />
      </div>
    );
  }
}
