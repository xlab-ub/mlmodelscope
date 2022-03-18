import React, {Component} from 'react';
import "./Footer.scss"

import C3SRLogo from "../../resources/logo/C3SR_white.png";
import IllinoisLogo from "../../resources/logo/uiuc_white.png";
import BuffaloLogo from "../../resources/logo/Buffalo_white.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__logos-container">
          <a className="footer__logo-link" href="https://c3sr.com">
            <img className="footer__logo" src={C3SRLogo} alt="Center for cognitive computing systems research" />
          </a>
          <a className="footer__logo-link" href="https://illinois.edu">
            <img className="footer__logo" src={IllinoisLogo} alt="University of Illinois" />
          </a>
          <a className="footer__logo-link" href="https://www.buffalo.edu/">
            <img className="footer__buffalo-logo" src={BuffaloLogo} alt="University at Buffalo" />
          </a>
        </div>
      </div>
    )
  }
}
