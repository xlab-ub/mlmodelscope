import React, {Component} from 'react';
import "./Header.scss"

export default class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="header__logo-container">
          <p className="header__beta">Beta</p>
          <div className="header__logotype">
            <span className="header__logotype-ml">ML</span>
            <span className="header__logotype-modelscope">Modelscope</span>
          </div>
        </div>
      </div>
    );
  }
}
