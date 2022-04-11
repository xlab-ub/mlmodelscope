import {ReactComponent as RightArrowIcon} from "../../resources/icons/arrow-right-white.svg";
import React, {useState} from "react";
import {ReactComponent as ChevronDown} from "./../../resources/icons/chevron-down-azul.svg";

export function HeaderMenu({getElement}) {
  const LinkItem = ({link, display, isSubMenu}) => {
    const getWrapperClass = () => isSubMenu ?
      getElement("library-link-container") +" " + getElement("submenu-item") :
      getElement("library-link-container");

    return <div className={getWrapperClass()}>
      <a className={getElement("library-link")} href={link}>{display}</a>
      <RightArrowIcon className={getElement("arrow-icon")}/>
    </div>
  }

  const LinkSection = ({link, display, children}) => {
      const [isOpen, setIsOpen] = useState(false);


      return <>
        <div className={getElement("library-link-container")}>
          <div className={getElement("library-link-container-expandable")}>

          <div className={getElement("library-link-container-link")}>
            <a className={getElement("library-link")} href={link}>{display}</a>
            <RightArrowIcon className={getElement("arrow-icon")}/>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className={getElement("library-link-container-expand")}>
            <ChevronDown fill={"white"} />
          </button>
          </div>

        </div>
        {isOpen && children}
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
