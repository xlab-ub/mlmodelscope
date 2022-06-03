import React, {useState} from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import TrialOutputWrapper from "./TrialOutputWrapper";
import Header from "../Header/Header";
import useBEMNaming from "../../common/useBEMNaming";
import RemoveModelModal from "../RemoveModelModal/RemoveModelModal";
import ModelCannotBeRemovedModal from "../ModelCannotBeRemovedModal/ModelCannotBeRemovedModal";
import OneColumnOverview from "./Layouts/OneColumnOverview";
import Button from "../Buttons/Button";
import {ExperimentDetailModalTypes} from "../../routes/ExperimentDetailContainer";
import {ExperimentInputs} from "./ExperimentInputs";
import AddInputModal from "./modals/AddInputModal";
import RemoveInputModal from "./modals/RemoveInputModal";
import InputCannotBeRemovedModal from "./modals/InputCannotBeRemovedModal";

export default function ExperimentDetailPage(props) {
  const [value, setValue] = useState(-1);

  const {getBlock, getElement} = useBEMNaming("experiment-detail-page");
  const calculateCardWidth = () => {
    let length = props.experiment.trials.length;
    if (length === 1)
      return "50%";
    if (length === 2)
      return "33%";
    return "25%";
  }

  let trialComponents = props.experiment.trials.map((trial, trialIndex) => (
    <div style={{width: calculateCardWidth()}} key={trialIndex} className={getElement("trial")}>
      <TrialOutputWrapper value={value} trial={trial} onDeleteTrial={props.onDeleteTrial}
                          deletedTrial={props.trialToDelete}
                          trialIsDeleting={props.trialIsDeleting}/>
    </div>
  ))

  const Layout = getLayout();


  return (
    <div className={getBlock()}>
      <Header/>
      <ExperimentDetailHeader/>


      <Layout>
        <ExperimentInputs showDeleteInputModal={props.showDeleteInputModal} showAddInputModal={props.showAddInputModal}
                          inputs={props.inputs}
                          selectedInput={props.selectedInput} selectInput={props.updateInput}
                          getAddModelsLink={props.getAddModelsLink}/>
        <div className={getElement("scroll-container")}>

          <div className={getElement("trial-cards")}>
            {trialComponents}
            <div style={{width: calculateCardWidth()}} className={getElement("ghost-card")}>
              <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false}
                      link={props.getAddModelsLink(props)}/>
            </div>
          </div>
        </div>


      </Layout>
      {getModal(props)}
    </div>
  );

  function getLayout() {
    const machine = props.machine ?? "amd64";

    return ({children}) => <OneColumnOverview
      {...props}
      getAddModelsLink={getAddModelsLink}
      task={props.task.id}
      machine={machine}
    >{children}</OneColumnOverview>
  }

  function getAddModelsLink(props) {
    if (!props.experiment) {
      return null;
    }

    return `/experiment/${props.experiment.id}/add-models`;
  }

  function getModal(props) {
    switch (props.modalType) {
      case ExperimentDetailModalTypes.confirmDeleteModel:
        return <RemoveModelModal onCancel={props.onCancelDeleteTrial} onConfirm={props.onConfirmDeleteTrial}/>
      case ExperimentDetailModalTypes.modelCannotBeRemoved:
        return <ModelCannotBeRemovedModal onConfirm={props.onConfirmModelCannotBeRemoved}/>
      case ExperimentDetailModalTypes.addInput:
        return <AddInputModal sampleInputs={props.task.sampleInputs} addInput={props.addInput}
                              close={props.onCancelDeleteTrial}/>
      case ExperimentDetailModalTypes.confirmDeleteInput:
        return <RemoveInputModal close={props.onCancelDeleteTrial} deleteInput={props.deleteInput}/>
      case ExperimentDetailModalTypes.inputCannotBeRemoved:
        return <InputCannotBeRemovedModal onConfirm={props.onCancelDeleteTrial}/>
      default:
        return <></>
    }
  }
}


