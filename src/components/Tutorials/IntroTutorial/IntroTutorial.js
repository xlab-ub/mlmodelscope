import React, {useState} from "react";
import TutorialStepper, {makeComponent} from "../_Common/TutorialStepper";
import Slide1 from "./Slides/Slide1";
import SideNavigation from "./Common/SideNavigation";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import BackToTopButton from "./Common/BackToTopButton";
import Slide4 from "./Slides/Slide4";
import Slide5 from "./Slides/Slide5";
import Slide6 from "./Slides/Slide6";
import Slide7 from "./Slides/Slide7";
import Slide8 from "./Slides/Slide8";
import Slide9 from "./Slides/Slide9";
import Slide10 from "./Slides/Slide10";
import Slide11 from "./Slides/Slide11";
import Header from "../../Header/Header";

export default function IntroTutorial(props) {
  const [section, setSection] = useState(0);

  const goToSection = (s) => {
    setSection(s);
  };

  const Components = [
    makeComponent(Slide1, "", "intro-tutorial-slide-1"),
    makeComponent(Slide5, "", "intro-tutorial-slide-5"),

    makeComponent(Slide2, "", "intro-tutorial-slide-2"),
    makeComponent(Slide3, "", "intro-tutorial-slide-3"),
    makeComponent(Slide4, "", "intro-tutorial-slide-4"),
    makeComponent(Slide6, "", "intro-tutorial-slide-6"),
    makeComponent(Slide7, "", "intro-tutorial-slide-7"),
    makeComponent(Slide8, "", "intro-tutorial-slide-8"),
    makeComponent(Slide9, "", "intro-tutorial-slide-9"),
    makeComponent(Slide10, "", "intro-tutorial-slide-10"),
    makeComponent(Slide11, "", "intro-tutorial-slide-11")
  ]

  const staticComponents = (props) => <>
    <SideNavigation  {...props}/>
    <BackToTopButton {...props} />
  </>

  return <>
    <Header/>
    <TutorialStepper
      goToSection={goToSection}
      components={Components}
      section={section}
      componentTransition={"scroll"}
      wrapperClass={"tutorial-with-side-nav"}
      staticComponent={staticComponents}
    />
  </>
}
