import React, {Component} from 'react';
import ClassificationSummary from "./ClassificationSummary";
import ModelTag from "../Common/ModelTag";
import {ReactComponent as ExternalLink} from "../../resources/icons/ExternalLink.svg";
import {ReactComponent as CloseIcon} from "../../resources/icons/close-icon.svg";

export default class TrialOutputWrapper extends Component {
  render() {
    let model = this.props.trial.model;

    let machineTagKey = 0;
    let machineTags = <dd>N/A</dd>
    if (!!model.framework.architectures) {
      machineTags = model.framework.architectures.map(machine => (
        <dd key={machineTagKey++} className="trial-output-wrapper__model-tag">
          <ModelTag type="machine" content={machine.name}/>
        </dd>));
    }

    return (
      <div className="trial-output-wrapper">
        <div className="trial-output-wrapper__title-box">
          <dl>
            <dt className="trial-output-wrapper__model-label">Model:</dt>
            <dd>
              <a className="trial-output-wrapper__model-name" href={"models/" + model.id}>{model.name}</a>
            </dd>
          </dl>
          <CloseIcon className="trial-output-wrapper__delete-trial-button"/>
        </div>
        <div className="trial-output-wrapper__content-box">
          <div className="trial-output-wrapper__info-row">
            <dl className="trial-output-wrapper__model-details">
              <dt className="trial-output-wrapper__detail-label">Framework:</dt>
              <dd className="trial-output-wrapper__model-tag"><ModelTag type="framework" content={model.framework.name} /></dd>
              <dt className="trial-output-wrapper__detail-label">Machines:</dt>
              {machineTags}
            </dl>
            <div className="trial-output-wrapper__link-box">
              <a className="trial-output-wrapper__link" href="">Advanced Output Analysis</a>
              <ExternalLink />
            </div>
          </div>
          <ClassificationSummary results={this.props.trial.results} />
        </div>
      </div>
    )
  }
}
