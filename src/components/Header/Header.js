import React, {Component} from 'react';
import "./Header.scss"
import {ReactComponent as RightArrowIcon} from "../../resources/icons/arrow-right.svg";

export default class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="header__logo-container">
          <p className="header__beta">Beta</p>
          <a className="header__logotype" href="/">
            <span className="header__logotype__ml">ML</span>
            <span className="header__logotype__modelscope">Modelscope</span>
          </a>
        </div>
        <div className="header__library-link-container">
          <a className="header__library-link" href="/models">Browse model library</a>
          <RightArrowIcon className="header__arrow-icon" />
        </div>
      </div>
    );
  }
}
