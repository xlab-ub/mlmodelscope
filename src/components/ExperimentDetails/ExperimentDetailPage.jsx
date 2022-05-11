import React from 'react';
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

export default function ExperimentDetailPage(props) {
  const {getBlock, getElement} = useBEMNaming("experiment-detail-page");

  let trialComponents = props.experiment.trials.map((trial, trialIndex) => (
    <div key={trialIndex} className={getElement("trial")}>
      <TrialOutputWrapper trial={trial} onDeleteTrial={props.onDeleteTrial} deletedTrial={props.trialToDelete}
                          trialIsDeleting={props.trialIsDeleting}/>
    </div>
  ));

  const Layout = getLayout();

  return (
    <div className={getBlock()}>
      <Header/>
      <ExperimentDetailHeader/>
      <Layout>
        {trialComponents}
        <div className={getElement("ghost-card")}>
          <Button content={"Add model"} icon="plus" isPrimary={false} isSmall={false}
                  link={getAddModelsLink(props)}/>
        </div>
      </Layout>
      {renderDeleteModal(props)}
      {renderModelCannotBeRemovedModal(props)}
    </div>
  );

  function getLayout() {
    let outputType = pending;

    if (props.experiment.trials.length > 0) {
      outputType = props.experiment.trials[0].model.output.type;
    }


    switch (outputType) {
      case object_detection:
      case semantic_segmentation:
      case image_enhancement:
      case instance_segmentation:
        const machine = props.experiment.trials[0].model.framework.architectures[0].name;

        return ({children}) => <OneColumnOverview
          {...props}
          getAddModelsLink={getAddModelsLink}
          task={outputType}
          machine={machine}
        >{children}</OneColumnOverview>

      case image_classification:
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
