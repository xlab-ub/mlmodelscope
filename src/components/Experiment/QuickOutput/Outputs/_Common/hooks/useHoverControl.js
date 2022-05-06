import {useState} from "react";

export function useHoverControl() {
  const [hoverProp, setHoverProp] = useState(null);
  const [scrollSection, setScrollSection] = useState(null);

  const hoverEnter = (prop, scrollTo = false) => {
    setHoverProp(prop);
    if (scrollTo)
      setScrollSection(prop);
  }
  const hoverLeave = () => {
    setHoverProp(null);
  }
  return {
    property: hoverProp,
    enter: hoverEnter,
    leave: hoverLeave,
    scrollSection
  };
}
