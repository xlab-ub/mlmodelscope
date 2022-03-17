import React, {Component} from 'react';
import "./Footer.scss"

import C3SRLogo from "../../resources/logo/logo-c3sr.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__logos-container">
          <a className="footer__logo-link" href="https://c3sr.com">
            <img className="footer__logo" src={C3SRLogo} />
          </a>
        </div>
      </div>
    )
  }
}
