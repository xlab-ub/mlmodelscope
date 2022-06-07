import React from 'react';
import ObjectDetectionSummary from "./ObjectDetectionSummary";

export default function InstanceSegmentationSummary(props) {
  return <ObjectDetectionSummary {...props} isInstanceSegmentation boundingBoxProperty={"instance_segment"}/>
}
