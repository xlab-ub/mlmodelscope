import React, {useMemo, useState} from 'react';
import ExperimentDetailHeader from "./ExperimentDetailHeader";
import TrialOutputWrapper from "./TrialOutputWrapper";
import Header from "../Header/Header";
import useBEMNaming from "../../common/useBEMNaming";
import RemoveModelModal from "../RemoveModelModal/RemoveModelModal";
import ModelCannotBeRemovedModal from "../ModelCannotBeRemovedModal/ModelCannotBeRemovedModal";
import {
  image_classification,
  image_enhancement,
  instance_segmentation,
  object_detection,
  pending,
  semantic_segmentation
} from "../../helpers/TaskIDs";
import TwoColumnOverview from "./Layouts/TwoColumnOverview";
import OneColumnOverview from "./Layouts/OneColumnOverview";
import Button from "../Buttons/Button";
import {ExperimentDetailModalTypes} from "../../routes/ExperimentDetailContainer";
import {ExperimentInputs} from "./ExperimentInputs";
import AddInputModal from "./modals/AddInputModal";
import RemoveInputModal from "./modals/RemoveInputModal";
import InputCannotBeRemovedModal from "./modals/InputCannotBeRemovedModal";

export default function ExperimentDetailPage(props) {
  const [value, setValue] = useState(50);

  const {getBlock, getElement} = useBEMNaming("experiment-detail-page");
  const calculateCardWidth = () => {
    let length = props.experiment.trials.length;
    if (length === 1)
      return "50%";
    if (length === 2)
      return "33%";
    return "25%";
  }

  let trialComponents = useMemo(() => props.experiment.trials.map((trial, trialIndex) => (
    <div style={{width: calculateCardWidth()}} key={trialIndex} className={getElement("trial")}>
      <TrialOutputWrapper value={value} trial={trial} onDeleteTrial={props.onDeleteTrial}
                          deletedTrial={props.trialToDelete}
                          trialIsDeleting={props.trialIsDeleting}/>
    </div>
  )), [value]);

  const Layout = useMemo(() => getLayout(), []);


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
    let outputType = pending;

    if (props.experiment.trials.length > 0 && props.experiment.trials[0].model) {
      outputType = props.experiment.trials[0].model.output.type;
    }


    switch (outputType) {
      case object_detection:
      case semantic_segmentation:
      case image_enhancement:
      case instance_segmentation:
      case image_classification:

        const machine = props.experiment.trials[0].model.framework.architectures[0].name;

        return ({children}) => <OneColumnOverview
          {...props}
          getAddModelsLink={getAddModelsLink}
          task={outputType}
          machine={machine}
        >{children}</OneColumnOverview>

      default:
        return ({children}) => <TwoColumnOverview
          {...props}
          getAddModelsLink={getAddModelsLink}
        >{children}</TwoColumnOverview>
    }
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


