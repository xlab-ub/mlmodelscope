import {useState} from "react";

export const goToTypes = {
  first: "FIRST",
  last: "LAST",
  next: "NEXT",
  prev: "PREV"
}

export default function useTutorialController(goToSection, length) {
  const [currentSection, setCurrentSection] = useState(0);

  const goTo = (section) => {
    let value;


    switch (section) {
      case goToTypes.first:
        value = goToFirst();
        break;
      case goToTypes.last:
        value = goToLast();
        break;
      case goToTypes.next:
        value = next();
        break;
      case goToTypes.prev:
        value = prev();
        break;
      default:
        value = section;
    }

    setCurrentSection(value)
    goToSection(value);
  }

  const getCurrentSection = () => {
    if (currentSection < 0) return 0;
    if (currentSection >= length) return length - 1;

    return currentSection;
  }

  const next = () => {
    if (hasNext())
      return getCurrentSection() + 1;
    return getCurrentSection();
  }
  const prev = () => {
    if (hasPrev())
      return getCurrentSection() - 1;
    return getCurrentSection();
  }
  const hasNext = () => {
    return getCurrentSection() < length - 1;
  }
  const hasPrev = () => {
    return getCurrentSection() !== 0;
  }
  const goToLast = () => length - 1
  const goToFirst = () => 0;


  return {section: getCurrentSection(), goToSection: goTo};
}
