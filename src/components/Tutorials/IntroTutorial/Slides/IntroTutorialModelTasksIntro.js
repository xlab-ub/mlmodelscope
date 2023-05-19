import React from "react";
import useBEMNaming from "../../../../common/useBEMNaming";
import "./IntroTutorialModelTasksIntro.scss";

export default function IntroTutorialModelTasksIntro(props) {
    const {getElement} = useBEMNaming("intro-tutorial-model-tasks-intro");

    return <>
        <p className={getElement("intro-text")}>Exploring other model tasks</p>
        <p className={getElement("title")}>
            Now that you've got the basics down, let's explore other things machine learning models can do!
        </p>
        <button className={getElement("cta")} onClick={() => props.goToSection(props.index + 1)}>Start exploring
        </button>
    </>
}
