import React from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import ExperimentOverview from "./ExperimentOverview";
import TrialOutputWrapper from "./TrialOutputWrapper";
import Button from "../Buttons/Button";
import Header from "../Header/Header";
import useBEMNaming from "../../common/useBEMNaming";
import RemoveModelModal from "../RemoveModelModal/RemoveModelModal";
import ModelCannotBeRemovedModal from "../ModelCannotBeRemovedModal/ModelCannotBeRemovedModal";

export default function ExperimentDetailPage(props) {
  const {getBlock, getElement} = useBEMNaming("experiment-detail-page");

  let trialComponents = props.experiment.trials.map((trial, trialIndex) => (
    <div key={trialIndex} className={getElement("trial")}>
      <TrialOutputWrapper trial={trial} onDeleteTrial={props.onDeleteTrial} deletedTrial={props.trialToDelete}
                          trialIsDeleting={props.trialIsDeleting}/>
    </div>
  ));

  return (
    <div className={getBlock()}>
      <Header/>
      <ExperimentDetailHeader/>
      <div className={getElement("content")}>
        <div className={getElement("first-column")}>
          <div className={getElement("overview-section")}>
            {getExperimentOverview(props)}
          </div>
        </div>
        <div className={getElement("trials-section")}>
          <div className={getElement("trials-header-box")}>
            <p className={getElement("trials-header")}>Trials for your experiment</p>
            <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false} link={getAddModelsLink(props)}/>
          </div>
          {trialComponents}
          <div className={getElement("ghost-card")}>
            <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false} link={getAddModelsLink(props)}/>
          </div>
        </div>
      </div>
      {renderDeleteModal(props)}
      {renderModelCannotBeRemovedModal(props)}
    </div>
  );

  function getExperimentOverview(props) {
    if (!props.experiment || props.experiment.trials.length === 0)
      return;

    let firstModel = props.experiment.trials[0].model;
    let task = firstModel ? firstModel.output.type : 'classification';
    let inputs = props.experiment.trials[0].inputs;

    return (<ExperimentOverview task={task} inputs={inputs}/>);
  }

  function getAddModelsLink(props) {
    if (!props.experiment) {
      return null;
    }

    return `/experiment/${props.experiment.id}/add-models`;
  }

  function renderDeleteModal(props) {
    if (props.trialToDelete && !props.trialIsDeleting) {
      return <RemoveModelModal onCancel={props.onCancelDeleteTrial} onConfirm={props.onConfirmDeleteTrial}/>
    }
  }

  function renderModelCannotBeRemovedModal(props) {
    if (props.showModelCannotBeRemoved) {
      return <ModelCannotBeRemovedModal onConfirm={props.onConfirmModelCannotBeRemoved}/>
    }
  }
}
