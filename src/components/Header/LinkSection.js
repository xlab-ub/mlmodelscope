import React, {useState} from "react";
import {ReactComponent as RightArrowIcon} from "../../resources/icons/arrow-right-white.svg";
import {ReactComponent as ChevronDown} from "../../resources/icons/chevron-down-white.svg";
import {LinkItem} from "./LinkItem";

export function LinkSection({getElement, isResponsiveMenu, link, display, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  }

  const getButtonClassName = () =>
    isOpen ?
      getElement("library-link-container-expand library-link-container-expand-rotated") :
      getElement("library-link-container-expand");


  const getChildContainerClassName = () => {
    let classList = ["responsive-menu-children"];
    const add = (name) => classList.push(`responsive-menu-children-${name}`);

    if (isOpen) add("open");

    return getElement(classList.join(" "));
  }

  if (isResponsiveMenu)
    return <>
      <div className={getElement("responsive-menu-section")}>
        <div className={getElement("responsive-menu-item")}>
          <a className={getElement("library-link")} href={link}>{display}</a>
          <RightArrowIcon className={getElement("arrow-icon")}/>
        </div>
        <button onClick={toggleSection} className={getButtonClassName()}>
          <ChevronDown fill={"white"}/>
        </button>
      </div>
      <div className={getChildContainerClassName()}>
        {children}
      </div>
    </>


  return <LinkItem link={link} display={display} isResponsiveMenu={isResponsiveMenu} getElement={getElement}/>
}
