import React from 'react';
import ClassificationSummary from "./Summaries/ClassificationSummary";
import ModelTag from "../Common/ModelTag";
import ObjectDetectionSummary from "./Summaries/ObjectDetectionSummary";
import {ReactComponent as CloseIcon} from "../../resources/icons/close-icon.svg";
import {image_classification, object_detection} from "../../helpers/TaskIDs";

export default function TrialOutputWrapper(props) {

  const handleClose = () => {
    props.onDeleteTrial(props.trial);
  }

  let model = props.trial.model;

  let machineTagKey = 0;
  let machineTags = <dd>N/A</dd>
  if (!!model.framework && !!model.framework.architectures) {
    machineTags = model.framework.architectures.map(machine => (
      <dd key={machineTagKey++} className="trial-output-wrapper__model-tag">
        <ModelTag type="machine" content={machine.name}/>
      </dd>));
  }

  const getContent = () => {
    if (props.trial.completed_at) {
      switch (props.trial.model.output.type) {
        case image_classification:
          return (<ClassificationSummary results={props.trial.results}/>)
        case object_detection:
          return <ObjectDetectionSummary trial={props.trial}/>
      }

      return <></>
    } else {
      return (
        <div className="trial-output-wrapper__loading">
          <p className="trial-output-wrapper__loading-header">Output:</p>
          <div className="trial-output-wrapper__spinner-container">
            <div className="trial-output-wrapper__spinner">

            </div>
            <p className="trial-output-wrapper__spinner-text">Fetching results...</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div
      className={`trial-output-wrapper ${props.trialIsDeleting && props.deletedTrial?.id === props.trial.id && "trial-output-wrapper__closing"}`}>
      <div className="trial-output-wrapper__title-box">
        <dl className="trial-output-wrapper__title-definition-list">
          <dt className="trial-output-wrapper__model-label">Model:</dt>
          <dd>
            <a className="trial-output-wrapper__model-name" target={"_blank"}
               href={"/model/" + model.id}>{model.name}</a>
          </dd>
        </dl>
        <CloseIcon className="trial-output-wrapper__delete-trial-button"
                   onClick={() => handleClose()}/>
      </div>
      <div className="trial-output-wrapper__content-box">
        <div className="trial-output-wrapper__info-row">
          <dl className="trial-output-wrapper__model-details">
            <div className={"trial-output-wrapper__model-details-section"}>

              <dt className="trial-output-wrapper__detail-label">Framework:</dt>
              <dd className="trial-output-wrapper__model-tag"><ModelTag type="framework"
                                                                        content={model.framework.name}/></dd>
            </div>
            <div className={"trial-output-wrapper__model-details-section"}>
              <dt className="trial-output-wrapper__detail-label">Machines:</dt>
              {machineTags}
            </div>

          </dl>
          <div className="trial-output-wrapper__link-box">
            {/*<a className="trial-output-wrapper__link" href="">Advanced Output Analysis</a>*/}
            {/*<ExternalLink /> Hidden for now */}
          </div>
        </div>
        {getContent()}
      </div>
    </div>
  )
}

