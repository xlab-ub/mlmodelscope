import React from 'react';
import "./Header.scss"
import {ReactComponent as MenuIcon} from "../../resources/icons/menu.svg";
import {ReactComponent as X} from "../../resources/icons/x.svg";
import {HeaderMenu} from "./HeaderMenu";
import {useHeaderControl} from "./useHeaderControl";

export default function Header(props) {
  const {showMenu, toggleMenu, getElement, getHeaderClassNames} = useHeaderControl(props);

  return (
    <>
      <div className={getElement("placeholder")}>

      </div>
    <div className={getHeaderClassNames()}>
      <div className={getElement("row")}>

      <div className={getElement("logo-container")}>
        <span className={getElement("beta")}>Beta</span>
        <a className={getElement("logotype")} href="/">
          <span className={getElement("logotype__ml")}>ML</span>
          <span className={getElement("logotype__modelscope")}>Modelscope</span>
        </a>
      </div>
      <div hidden={showMenu} aria-hidden={showMenu} className={getElement("menu")}>
        <HeaderMenu getElement={getElement} testMenus={props.testMenus} />
      </div>
      <button onClick={toggleMenu} className={getElement("responsive-menu-icon")}>
        {showMenu ? <X fill={"white"} /> :  <MenuIcon /> }
      </button>
      </div>

      <div hidden={!showMenu} aria-hidden={!showMenu} className={getElement("responsive-menu")}>
        <HeaderMenu getElement={getElement} isResponsiveMenu testMenus={props.testMenus} />
      </div>
    </div>
    </>

  );
}

Header.defaultProps = {
  splash: false,
}
