import React from "react";
import useBEMNaming from "../../../../common/useBEMNaming";
import "./IntroTutorialTasks.scss";
import {TaskExamples} from "../../../HomePage/TaskExamples";

export default function IntroTutorialTasks(props) {
    const {getElement} = useBEMNaming("intro-tutorial-tasks");

    return <>
        <div className={getElement("text-area")}>

            <p className={getElement("intro-text")}>
                Exploring other model tasks
            </p>
            <p className={getElement("title")}>
                What else can models do?
            </p>
            <div className={getElement("sub-title-wrapper")}>

                <p className={getElement("sub-title")}>
                    Models can perform a variety of tasks, like recognizing objects in an image or identifying a speaker
                    in an
                    audio
                    file. Earlier, we looked at an image classification task. Here are some model tasks you’ll find on
                    this
                    website.
                    Go ahead and try them out yourself!
                </p>
            </div>
        </div>

        <TaskExamples noHeading/>
    </>
}
