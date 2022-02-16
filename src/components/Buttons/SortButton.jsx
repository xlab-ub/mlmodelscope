import React, {Component} from "react";
import {ReactComponent as SortBars} from "../../resources/icons/sort-bars.svg";

export default class SortButton extends Component {
  render() {
    return (
      <div className="sort-button">
        <button className="sort-button__button">
          <SortBars className="sort-button__icon"/>
          Sort by
        </button>
      </div>
    );
  }
}
