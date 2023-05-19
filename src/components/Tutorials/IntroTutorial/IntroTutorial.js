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
import IntroTutorialComparingModels from "./Slides/IntroTutorialComparingModels";
import IntroTutorialModelComparisonResult from "./Slides/IntroTutorialModelComparisonResult";
import IntroTutorialModelTasksIntro from "./Slides/IntroTutorialModelTasksIntro";
import IntroTutorialTasks from "./Slides/IntroTutorialTasks";
import Header from "../../Header/Header";

export default function IntroTutorial(props) {
    const [section, setSection] = useState(0);

    const goToSection = (s) => {
        setSection(s);
    };

    const Components = [
        makeComponent(IntroTutorialIntro, "", "intro-tutorial-intro"),
        makeComponent(IntroTutorialMachineLearningOverview, "", "intro-tutorial-machine-learning-overview"),
        makeComponent(IntroTutorialMachineLearningUses, "", "intro-tutorial-machine-learning-uses"),
        makeComponent(IntroTutorialPlantPrompt, "", "intro-tutorial-plant-prompt"),
        makeComponent(IntroTutorialPlantOutput, "", "intro-tutorial-plant-output"),
        makeComponent(IntroTutorialTrainingInfographic, "", "intro-tutorial-training-infographic"),
        makeComponent(IntroTutorialModelsInfographic, "", "intro-tutorial-models-infographic"),
        makeComponent(IntroTutorialComparingModels, "", "intro-tutorial-comparing-models"),
        makeComponent(IntroTutorialModelComparisonResult, "", "intro-tutorial-model-comparison-result"),
        makeComponent(IntroTutorialModelTasksIntro, "", "intro-tutorial-model-tasks-intro"),
        makeComponent(IntroTutorialTasks, "", "intro-tutorial-tasks")
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
