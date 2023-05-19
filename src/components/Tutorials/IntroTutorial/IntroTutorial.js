import React, {useState} from "react";
import TutorialStepper, {makeComponent} from "../_Common/TutorialStepper";
import IntroTutorialIntro from "./Slides/IntroTutorialIntro";
import SideNavigation from "./Common/SideNavigation";
import IntroTutorialMachineLearningUses from "./Slides/IntroTutorialMachineLearningUses";
import IntroTutorialPlantPrompt from "./Slides/IntroTutorialPlantPrompt";
import BackToTopButton from "./Common/BackToTopButton";
import IntroTutorialPlantOutput from "./Slides/IntroTutorialPlantOutput";
import IntroTutorialMachineLearningOverview from "./Slides/IntroTutorialMachineLearningOverview";
import IntroTutorialTrainingInfographic from "./Slides/IntroTutorialTrainingInfographic";
import IntroTutorialModelsInfographic from "./Slides/IntroTutorialModelsInfographic";
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
        makeComponent(IntroTutorialIntro, "", "intro-tutorial-slide-1"),
        makeComponent(IntroTutorialMachineLearningOverview, "", "intro-tutorial-slide-5"),

        makeComponent(IntroTutorialMachineLearningUses, "", "intro-tutorial-slide-2"),
        makeComponent(IntroTutorialPlantPrompt, "", "intro-tutorial-slide-3"),
        makeComponent(IntroTutorialPlantOutput, "", "intro-tutorial-slide-4"),
        makeComponent(IntroTutorialTrainingInfographic, "", "intro-tutorial-slide-6"),
        makeComponent(IntroTutorialModelsInfographic, "", "intro-tutorial-slide-7"),
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
