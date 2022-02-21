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

  updateSortOrder = (e) => {
    let isAscending = e.target.value;
    console.log(isAscending);
    this.props.updateSortByNameIsAscending(isAscending);
  }

  render() {
    return (
      <div className="sort-button">
        <button className="sort-button__button" onFocus={this.showOptions} onBlur={this.hideOptions}>
          <SortBars className="sort-button__icon"/>
          Sort by
        </button>
        <div className="sort-button__option-box" hidden={this.state.optionsHidden}>
          <div className="sort-button__radio-label">
            <input className="sort-button__radio" type="radio" id="name-ascend" name="sort-option" value="true"
                   onMouseDown={() => this.updateSortOrder(this)}/>
            <label className="sort-button__option" htmlFor="name-ascend">Name ascending</label>
          </div>
          <div className="sort-button__radio-label">
            <input className="sort-button__radio" type="radio" id="name-descend" name="sort-option" value="false"
                   onMouseDown={() => this.updateSortOrder(this)}/>
            <label className="sort-button__option" htmlFor="name-descend">Name descending</label>
          </div>

          <button className="sort-button__option" onMouseDown={() => this.updateSortOrder(true)}>Name - Ascending</button>
          <button className="sort-button__option" onMouseDown={() => this.updateSortOrder(false)}>Name - Descending</button>
        </div>
      </div>
    );
  }
}
