import React from "react";
import useBEMNaming from "../../../../common/useBEMNaming";
import "./Slide11.scss";
import {TaskExamples} from "../../../HomePage/TaskExamples";

export default function Slide11(props) {
  const {getElement} = useBEMNaming("intro-tutorial-slide-11");

  return <>
    <p className={getElement("intro-text")}>
      Exploring other model tasks
    </p>
    <p className={getElement("title")}>
      What else can models do?
    </p>
    <p className={getElement("sub-title")}>
      Models can perform a variety of tasks, like recognizing objects in an image or identifying a speaker in an audio
      file. Earlier, we looked at an image classification task. Here are some model tasks you’ll find on this website.
      Go ahead and try them out yourself!
    </p>

    <TaskExamples noHeading/>
  </>
}
