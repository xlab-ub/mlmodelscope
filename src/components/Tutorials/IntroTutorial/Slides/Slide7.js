import React from 'react';
import useBEMNaming from "../../../../common/useBEMNaming";
import {TestImageClassificationResult} from "../../../Experiment/QuickOutput/Outputs/Classification/Features";
import ModelCard from "../../../ModelList/ModelCard/ModelCard";
import "./Slide7.scss";

export default function Slide7(props) {
  const {getElement} = useBEMNaming("intro-tutorial-slide-7");

  const models = new Array(9).fill(TestImageClassificationResult.model);

  return <>
    <div className={getElement("text-area")}>
      <p className={getElement("intro-text")}>Comparing Models</p>

      <p className={getElement("title")}>
        With so many to models to choose from, App builders can have a hard time finding the best one for their use
        case.
      </p>
      <button className={getElement("cta")} onClick={() => props.goToSection(props.index + 1)}>
        Let’s learn how modelers determine which models to use
      </button>
    </div>
    <div className={getElement("models-area")}>
      {models.map(model => <ModelCard model={model}/>)}
    </div>
  </>
}
