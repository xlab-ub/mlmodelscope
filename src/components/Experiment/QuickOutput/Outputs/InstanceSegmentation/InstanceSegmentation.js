import React from 'react';
import useBEMNaming from "../../../../../common/useBEMNaming";
import useInstanceSegmentationControl from "./hooks/useInstanceSegmentationControl";
import InstanceSegmentationTable from "./InstanceSegmentationTable";
import InstanceSegmentationImage from "./InstanceSegmentationImage";


export default function InstanceSegmentation(props) {
  const {getElement, getBlock} = useBEMNaming("instance-segmentation");
  const {coloredSections, hover, category} = useInstanceSegmentationControl(props.trial);
  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-headline")}>Output</h3>
      <p className={getElement("header-subheading")}>What each object detected is</p>
    </div>
    <div className={getElement("top-row")}>
      <InstanceSegmentationImage
        img={props.trial.inputs[0]}
      />
      <InstanceSegmentationTable
        category={category}
        sections={coloredSections}
      />

    </div>
    <div className={getElement("bottom-row")}>
      <a href={"/test"} className={getElement("bottom-row-btn")}>
        Try a different image
      </a>
    </div>
  </div>
}
