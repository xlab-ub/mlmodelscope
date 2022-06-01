import useBEMNaming from "../../common/useBEMNaming";
import {ReactComponent as NoIcon} from "../../resources/icons/no-models.svg";
import React from 'react';
import "./_NoResults.scss";

export default function ModelListNoResults(props) {
  const {getBlock, getElement} = useBEMNaming("model-list-no-results");

  return <div className={getBlock()}>
    <NoIcon className={getElement("icon")}/>
    <p className={getElement("heading")}>There are no models found.</p>
    <p className={getElement("subheading")}>There are no models that match your current filter settings.</p>
  </div>
}
