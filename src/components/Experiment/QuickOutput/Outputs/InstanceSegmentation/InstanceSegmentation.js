import React from 'react';
import "./InstanceSegmentation.scss";
import ObjectDetection from "../ObjectDetection/ObjectDetection";

export default function InstanceSegmentation(props) {
  return <ObjectDetection {...props} isInstanceSegmentation boundingBoxProperty={"instance_segment"}/>
}
