import React, {useEffect} from "react";
import useInView from "./hooks/useInView";
import "./TutorialSection.scss";
import useBEMNaming from "../../../common/useBEMNaming";

export default function TutorialSection(props) {
  const {getBlock, getElement} = useBEMNaming("section-wrapper");
  const {render, currentSection, index, setCurrentSection, ...rest} = props;

  const {ref, isInView} = useInView(0.60);

  useEffect(() => {
    if (isInView && currentSection !== index)
      setCurrentSection(index);
  }, [isInView])


  const Child = () => props.render({...rest, isInView, index, goToSection: setCurrentSection});

  const getContainerClass = () => {
    let classes = getBlock();

    const add = (cls) => classes += " " + getElement(cls);

    let transitionProp = props.transition;
    if (transitionProp) {
      add(transitionProp);
      if (isInView || index === currentSection) add(`${transitionProp}-visible`);
    }


    if (!props.isVisible) add("hidden");

    return classes;
  }

  return <div ref={ref} className={getContainerClass()} data-tutorial-section={`${index}`}>
    <Child/>
  </div>
}
