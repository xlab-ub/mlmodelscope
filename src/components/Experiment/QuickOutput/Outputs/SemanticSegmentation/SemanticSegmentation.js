import React from 'react';
import useBEMNaming from "../../../../../common/useBEMNaming";
import {SemanticSegmentationImage} from "./SemanticSegmentationImage";
import "./SemanticSegmentation.scss";
import SemanticSegmentationTable from "./SemanticSegmentationTable";
import useSemanticSegmentationControl from "./hooks/useSemanticSegmentationControl";
import Task from "../../../../../helpers/Task";

export default function SemanticSegmentation(props) {
  const {
    hover,
    labelToShow,
    usedLabels,
    height,
    image,
    int_mask,
    width,
    categories
  } = useSemanticSegmentationControl(props.trial);
  const {getElement, getBlock} = useBEMNaming("semantic-segmentation");
  const task = Task.image_semantic_segmentation;

  return <div className={getBlock()}>
    <div className={getElement("header")}>
      <h3 className={getElement("header-headline")}>Output</h3>
      <p className={getElement("header-subheading")}>{task.outputText}</p>
    </div>
    <div className={getElement("top-row")}>
      <SemanticSegmentationImage img={image}
                                 width={width}
                                 height={height}
                                 int_mask={int_mask}
                                 hover={hover}
                                 categories={categories}
                                 labelToShow={labelToShow}
      />
      <SemanticSegmentationTable labels={usedLabels} hover={hover} labelToShow={labelToShow} categories={categories}/>
    </div>
    <div className={getElement("bottom-row")}>
      <a href={"/test"} className={getElement("bottom-row-btn")}>
        Try a different image
      </a>
    </div>
  </div>
}
