import React from "react";
import "./QuickImageInput.scss";
import {
  image_classification,
  image_enhancement,
  instance_segmentation,
  object_detection,
  semantic_segmentation,
  text,
} from "../../../helpers/TaskIDs";
import QuickImageInput from "./QuickImageInput";
import QuickTextInput from "./QuickTextInput";

export default function QuickInput(props) {
  switch (props.model.output.type) {
    case text:
      return <QuickTextInput {...props} />;

    case image_classification:
    case object_detection:
    case image_enhancement:
    case semantic_segmentation:
    case instance_segmentation:
    default:
      return <QuickImageInput {...props} />;
  }
}
