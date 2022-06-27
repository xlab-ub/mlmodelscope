import React, {useEffect} from "react";
import useTutorialController from "./hooks/useTutorialController";
import TutorialSection from "./TutorialSection";
import "./TutorialStepper.scss";

export const makeComponent = (component, transition = "", wrapperClass = "") => ({
  component,
  transition,
  sectionWrapperClass: wrapperClass
})
export default function TutorialStepper(props) {
  const {components, goToSection: _, staticComponent, ...rest} = props;

  const {goToSection, section} = useTutorialController(props.goToSection, props.components.length);

  useEffect(() => {
    if (props.componentTransition === "scroll") {
      document.querySelector(`[data-tutorial-section="${section}"]`).scrollIntoView({behavior: "smooth"})
    }
  }, [section]);

  const getVisibility = (index) => {
    if (props.componentTransition === "single")
      return index === section;

    return true;
  }

  const sections = props.components.map((component, index) => {
    const Component = component.component;
    const render = (props) => <Component {...props} />

    return <TutorialSection transition={component.transition} render={render} key={index} currentSection={section}
                            setCurrentSection={goToSection}
                            index={index} isVisible={getVisibility(index)}
                            sectionWrapperClass={component.sectionWrapperClass} {...rest} />

  });
  const StaticComponent = staticComponent || ((props) => <></>);

  return <div className={"tutorial-stepper"}>
    {sections}
    <StaticComponent currentSection={section} goToSection={goToSection}/>
  </div>
}
