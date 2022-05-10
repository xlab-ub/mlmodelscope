import React from 'react';
import useBEMNaming from "../../../common/useBEMNaming";
import Button from "../../Buttons/Button";
import ExperimentOverview from "../ExperimentOverview";
import "./TwoColumnOverview.scss";

export default function TwoColumnOverview(props) {
  const {getBlock, getElement} = useBEMNaming("two-column-overview");

  function getExperimentOverview(props) {
    if (!props.experiment || props.experiment.trials.length === 0)
      return;

    let firstModel = props.experiment.trials[0].model;
    let task = firstModel ? firstModel.output.type : 'classification';
    let inputs = props.experiment.trials[0].inputs;

    return (<ExperimentOverview task={task} inputs={inputs}/>);
  }


  return <div className={getBlock()}>
    <div className={getElement("first-column")}>
      <div className={getElement("overview-section")}>
        {getExperimentOverview(props)}
      </div>
    </div>
    <div className={getElement("trials-section")}>
      <div className={getElement("trials-header-box")}>

        <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false}
                link={props.getAddModelsLink(props)}/>
      </div>
      {props.children}
    </div>
  </div>
}
