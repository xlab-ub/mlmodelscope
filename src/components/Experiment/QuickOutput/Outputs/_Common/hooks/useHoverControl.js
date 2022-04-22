import {useState} from "react";

export function useHoverControl() {
  const [hoverProp, setHoverProp] = useState(null);
  const hoverEnter = (prop) => {
    setHoverProp(prop);
  }
  const hoverLeave = () => {
    setHoverProp(null);
  }
  return {
    property: hoverProp,
    enter: hoverEnter,
    leave: hoverLeave
  };
}
