import {useEffect, useRef, useState} from "react";
import useBEMNaming from "../../common/useBEMNaming";
import {image_classification} from "../../helpers/TaskIDs";

export function useHeaderControl(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showModelComparison, setShowModelComparison] = useState(false);
  const [selectedTask, setSelectedTask] = useState(image_classification);
  const containerRef = useRef();
  const btnRef = useRef();

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleComparison = () => setShowModelComparison(!showModelComparison);

  const {getElement, getBlock} = useBEMNaming("header")

  const getHeaderClassNames = () => {
    let classes = getBlock();
    const add = (cls) => classes += ` ${cls}`;

    if (props.splash) add(getElement("splash"));
    if (showMenu) add(getElement("shown-menu"));

    return classes;
  }

  function handleClick(event) {
    if ((containerRef.current && !containerRef.current.contains(event.target)) && (btnRef.current && !btnRef.current.contains(event.target)))
      setShowModelComparison(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, []);


  return {
    showMenu,
    toggleMenu,
    getElement,
    getHeaderClassNames,
    toggleComparison,
    showModelComparison,
    selectedTask,
    setSelectedTask,
    containerRef,
    btnRef
  };
}
