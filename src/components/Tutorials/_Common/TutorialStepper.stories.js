import React, {useState} from 'react';
import TutorialStepper from "./TutorialStepper";
import {goToTypes} from "./hooks/useTutorialController";

export default {
  title: "Components/TutorialStepper",
  component: TutorialStepper
}


const FakeBox = ({index, isInView, goToSection}) => <div style={{
  height: "90vh",
  width: "90vw",
  backgroundColor: "blue",
  margin: "48px",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}}>
  <button style={{color: "white"}} onClick={() => {
    goToSection(goToTypes.prev)
  }}>prev
  </button>

  <p>
    slide {index + 1}
  </p>


  <button style={{color: "white"}} onClick={() => {
    goToSection(goToTypes.next)
  }}>next
  </button>
</div>

const Template = (args) => {
  const [section, setSection] = useState(0)

  const goToSection = (s) => {
    setSection(s);
  };

  const makeComponent = (component, transition = "") => ({component, transition})

  return <TutorialStepper
    goToSection={goToSection}
    components={[makeComponent(FakeBox), makeComponent(FakeBox), makeComponent(FakeBox, "fade"), makeComponent(FakeBox, "slide-left"), makeComponent(FakeBox, "slide-right"), makeComponent(FakeBox, "slide-top"), makeComponent(FakeBox, "slide-bottom")]}
    section={section}
    componentTransition={"scroll"}
  />
}

export const Default = Template.bind({});
