import React, {useEffect, useMemo} from "react";
import useInView from "./hooks/useInView";
import "./TutorialSection.scss";
import useBEMNaming from "../../../common/useBEMNaming";

export default function TutorialSection(props) {
  const {getBlock, getElement} = useBEMNaming("section-wrapper");
  const {
    render,
    currentSection,
    index,
    setCurrentSection,
    wrapperClass,
    staticComponent,
    sectionWrapperClass,
    ...rest
  } = props;

  const {ref, isInView} = useInView(0.60);

  useEffect(() => {
    let timer;
    if (isInView && currentSection !== index)
      timer = setTimeout(() => {
        if (isInView && currentSection !== index)
          setCurrentSection(index);
      }, 150);

    return () => clearTimeout(timer);
  }, [isInView])


  const Child = useMemo(() => props.render({...rest, isInView, index, goToSection: setCurrentSection}), []);

  const getContainerClass = () => {
    let classes = getBlock();

    const add = (cls, skipGetElement = false) => classes += " " + (skipGetElement ? cls : getElement(cls));

    let transitionProp = props.transition;
    if (transitionProp) {
      add(transitionProp);
      if (isInView || index === currentSection) add(`${transitionProp}-visible`);
    }
    if (wrapperClass) add(wrapperClass, true);
    if (sectionWrapperClass) add(sectionWrapperClass, true);

    if (!props.isVisible) add("hidden");

    return classes;
  }


  return <div ref={ref} className={getContainerClass()} data-tutorial-section={`${index}`}>
    {Child}
  </div>
}
