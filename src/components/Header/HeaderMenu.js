import {ReactComponent as RightArrowIcon} from "../../resources/icons/arrow-right-white.svg";
import React, {useState} from "react";
import {ReactComponent as ChevronDown} from "./../../resources/icons/chevron-down-white.svg";

export function HeaderMenu({getElement, isResponsiveMenu, testMenus}) {
  const LinkItem = ({link, display, isSubMenu}) => {
    const getWrapperClass = () => {
      if(isResponsiveMenu) {
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

  const LinkSection = ({link, display, children}) => {
      const [isOpen, setIsOpen] = useState(false);

      const getButtonClassName = () => isOpen ?
        getElement("library-link-container-expand library-link-container-expand-rotated") :
        getElement("library-link-container-expand");



    if(isResponsiveMenu)
      return <>
          <div className={getElement("responsive-menu-section")}>
            <div className={getElement("responsive-menu-item")}>
              <a className={getElement("library-link")} href={link}>{display}</a>
              <RightArrowIcon className={getElement("arrow-icon")}/>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className={getButtonClassName()}>
              <ChevronDown fill={"white"} />
            </button>
          </div>

        {isOpen && children}
      </>


    return <LinkItem link={link} display={display} />
  }

  if(testMenus){
    return <>
      <LinkSection link={"/test"} display={"Menu Item 1"}>
        <LinkItem link={"/test"} display={"Submenu Item 1"} isSubMenu />
        <LinkItem link={"/test"} display={"Submenu Item 2"} isSubMenu />
        <LinkItem link={"/test"} display={"Submenu Item 3"} isSubMenu />
        <LinkItem link={"/test"} display={"Submenu Item 4"} isSubMenu />
      </LinkSection>
      <LinkItem link={"/test"} display={"Menu Item 2"}/>
      <LinkSection link={"/test"} display={"Menu Item 3"}>
        <LinkItem link={"/test"} display={"Submenu Item 1"} isSubMenu />
        <LinkItem link={"/test"} display={"Submenu Item 2"} isSubMenu />
        <LinkItem link={"/test"} display={"Submenu Item 3"} isSubMenu />
        <LinkItem link={"/test"} display={"Submenu Item 4"} isSubMenu />
      </LinkSection>
      </>
  }


  return (
    <>
      <LinkItem
        link={"/models"}
        display={"Browse model library"}
      />
    </>);
}
