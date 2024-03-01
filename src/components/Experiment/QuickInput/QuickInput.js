import React from "react";
import "./QuickImageInput.scss";
import QuickImageInput from "./QuickImageInput";
import QuickTextInput from "./QuickTextInput";
import QuickVideoInput from "./QuickVideoInput";
import Task from "../../../helpers/Task";
import { TaskInputTypes } from "../../../helpers/TaskInputTypes";

export default function QuickInput(props) {
  const inputType = Task.getStaticTask(props.model.output.type).inputType;

  switch (inputType) {
    case TaskInputTypes.Text:
      return <QuickTextInput {...props} />;

    case TaskInputTypes.Image:
      return <QuickImageInput {...props} />;
    case TaskInputTypes.Video:
      return <QuickVideoInput {...props} />;
    
      default:
        return <QuickImageInput {...props} />;
  }
}
