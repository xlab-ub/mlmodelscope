import React from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import useInstanceSegmentationControl
  from "../../Experiment/QuickOutput/Outputs/InstanceSegmentation/hooks/useInstanceSegmentationControl";
import InstanceSegmentationImage
  from "../../Experiment/QuickOutput/Outputs/InstanceSegmentation/InstanceSegmentationImage";
import InstanceSegmentationTable
  from "../../Experiment/QuickOutput/Outputs/InstanceSegmentation/InstanceSegmentationTable";

export default function InstanceSegmentationSummary(props) {
  const {getBlock, getElement} = useBEMNaming("instance-segmentation-summary");
  const {category, coloredSections, hover} = useInstanceSegmentationControl(props.trial);

  return <div className={getBlock()}>
    <p className={getElement("header")}>Output:</p>
    <div className={getElement("results")}>
      <InstanceSegmentationImage
        img={props.trial.inputs[0]}
        hover={hover}
      />
      <InstanceSegmentationTable
        category={category}
        sections={coloredSections}
      />
    </div>
  </div>
}
