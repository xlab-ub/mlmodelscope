import {useState} from "react";
import useBEMNaming from "../../common/useBEMNaming";

export function useHeaderControl(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const {getElement, getBlock} = useBEMNaming("header")

  const getHeaderClassNames = () => {
    let classes = getBlock();
    const add = (cls) => classes += ` ${cls}`;

    if (props.splash) add(getElement("splash"));
    if (showMenu) add(getElement("shown-menu"));

    return classes;
  }


  return {showMenu, toggleMenu, getElement, getHeaderClassNames};
}
