import {ReactComponent as RightArrowIcon} from "../../resources/icons/arrow-right-white.svg";
import React from "react";

export function LinkItem({isResponsiveMenu, getElement, link, display, isSubMenu}) {
  const getWrapperClass = () => {
    if (isResponsiveMenu) {
      return isSubMenu ?
        getElement("responsive-menu-item responsive-submenu-item") :
        getElement("responsive-menu-item");
    } else {
      return isSubMenu ?
        getElement("library-link-container submenu-item") :
        getElement("library-link-container");
    }
  }


  return <div className={getWrapperClass()}>
    <a className={getElement("library-link")} href={link}>{display}</a>
    <RightArrowIcon className={getElement("arrow-icon")}/>
  </div>
}
