import React, {useEffect} from "react";
import useTutorialController from "./hooks/useTutorialController";
import TutorialSection from "./TutorialSection";

export default function TutorialStepper(props) {
  const {components, goToSection: _, ...rest} = props;

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
                            index={index} isVisible={getVisibility(index)} {...rest} />

  });

  return <div className={"tutorial-stepper"}>
    {sections}
  </div>

}
