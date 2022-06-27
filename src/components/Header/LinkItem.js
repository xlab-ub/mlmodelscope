import React from "react";

export function LinkItem({isResponsiveMenu, getElement, link, display, isSubMenu, callback, className}) {
  const isActive = window.location.href.includes(link);


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


  if (callback) {
    return <div className={getWrapperClass() + ` ${className}`}>
      <button onClick={callback} className={getElement("button")}>{display}</button>
    </div>
  }

  const getActiveClass = () => {
    if (isActive) return " " + getElement("link-active")

    return ""
  }


  return <div className={getWrapperClass() + getActiveClass()}>
    <a className={getElement("library-link")} href={link}>{display}</a>
    <div className={getElement("library-link-bar")}/>
  </div>
}
