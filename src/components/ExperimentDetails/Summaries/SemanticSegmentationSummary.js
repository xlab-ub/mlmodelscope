import React from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import {
  SemanticSegmentationImage
} from "../../Experiment/QuickOutput/Outputs/SemanticSegmentation/SemanticSegmentationImage";
import SemanticSegmentationTable
  from "../../Experiment/QuickOutput/Outputs/SemanticSegmentation/SemanticSegmentationTable";
import "./SemanticSegmentationSummary.scss";
import useSemanticSegmentationControl
  from "../../Experiment/QuickOutput/Outputs/SemanticSegmentation/hooks/useSemanticSegmentationControl";

export default function SemanticSegmentationSummary(props) {
  const {
    categories,
    width,
    int_mask,
    image,
    height,
    usedLabels,
    labelToShow,
    hover
  } = useSemanticSegmentationControl(props.trial);
  const {getElement, getBlock} = useBEMNaming("semantic-segmentation-summary");

  return <div className={getBlock()}>

    <div className={getElement("top-row")}>
      <SemanticSegmentationImage img={image}
                                 width={width}
                                 height={height}
                                 int_mask={int_mask}
                                 hover={hover}
                                 categories={categories}
                                 labelToShow={labelToShow}
      />
      <SemanticSegmentationTable labels={usedLabels}
                                 hover={hover}
                                 categories={categories}
                                 labelToShow={labelToShow}/>
    </div>

  </div>
}
