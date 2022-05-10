import {useState} from "react";

export function useHoverControl() {
  const [hoverProp, setHoverProp] = useState(null);
  const [scrollSection, setScrollSection] = useState(null);
  const [labelProp, setLabelProp] = useState(null);

  const defaultHoverOptions = {
    scrollTo: false,
    labelOnly: false
  }

  const normalizeOptions = (options) => {
    if (!options) return defaultHoverOptions;

    Object.keys(defaultHoverOptions).forEach(key => {
      options[key] = options[key] === undefined ? defaultHoverOptions[key] : options[key];
    })

    return options;
  }

  const hoverEnter = (prop, givenOptions) => {
    const options = normalizeOptions(givenOptions);

    if (options.labelOnly) {
      setLabelProp(prop);
      setHoverProp(null);
    } else
      setHoverProp(prop);
    if (options.scrollTo)
      setScrollSection(prop);
  }
  const hoverLeave = () => {
    setHoverProp(null);
    setLabelProp(null);
  }
  return {
    property: hoverProp,
    enter: hoverEnter,
    leave: hoverLeave,
    scrollSection,
    labelProp
  };
}
