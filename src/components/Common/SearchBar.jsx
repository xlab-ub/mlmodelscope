import React, {Component} from "react";

export default class SearchBar extends Component {
  onSearchChange = (e) => {
    this.props.updateSearchText(e.target.value);
  }

  render() {
    return (
      <input className="search-bar" type="search" placeholder="Search" name="search" id="search" onChange={this.onSearchChange} />
    );
  }
}
