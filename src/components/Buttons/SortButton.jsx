import React, {Component} from "react";
import {ReactComponent as SortBars} from "../../resources/icons/sort-bars.svg";

export default class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsHidden: true,
    }
  }

  showOptions = () => {
    this.setState({
      optionsHidden: false
    });
  }

  hideOptions = () => {
    this.setState({
      optionsHidden: true,
    });
  }

  preventFocus = (e) => {
    e.preventDefault();
  }

  onOptionClick = (isAscending) => {
    if (!!this.props.updateSortByNameIsAscending) {
      this.props.updateSortByNameIsAscending(isAscending);
    }
    document.activeElement.blur();
    this.hideOptions();
  }

  render() {
    return (
      <div className="sort-button">
        <button className="sort-button__button" onClick={this.showOptions} onFocus={this.showOptions}
                onBlur={this.hideOptions}>
          <SortBars className="sort-button__icon"/>
          Sort by
        </button>
        <div className="sort-button__option-box" hidden={this.state.optionsHidden}>
          <input className="sort-button__radio" type="radio" id="name-ascend" name="sort-option" value="true"
                 defaultChecked={this.props.isSortAscending}/>
          <label className="sort-button__option" htmlFor="name-ascend" onMouseDown={this.preventFocus}
                 onClick={() => this.onOptionClick(true)}>Name ascending</label>
          <input className="sort-button__radio" type="radio" id="name-descend" name="sort-option" value="false"
                 defaultChecked={!this.props.isSortAscending}/>
          <label className="sort-button__option" htmlFor="name-descend" onMouseDown={this.preventFocus}
                 onClick={() => this.onOptionClick(false)}>Name descending</label>
        </div>
      </div>
    );
  }
}
