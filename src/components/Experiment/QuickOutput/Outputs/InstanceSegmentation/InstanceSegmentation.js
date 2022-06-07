import React from 'react';
import ObjectDetection from "../ObjectDetection/ObjectDetection";
import {BoundingBoxProperties} from "../ObjectDetection/utils/boundingBoxTypes";

export default function InstanceSegmentation(props) {
  return <ObjectDetection {...props} isInstanceSegmentation
                          boundingBoxProperty={BoundingBoxProperties.instance_segment}/>
}
