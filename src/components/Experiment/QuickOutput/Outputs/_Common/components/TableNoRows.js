import React from 'react';
import useBEMNaming from "../../../../../../common/useBEMNaming";
import "./TableNoRows.scss";

export default function TableNoRows(props) {
  const {getBlock, getElement} = useBEMNaming("table-no-rows");

  return <div className={getBlock()}>
    <p className={getElement("main-heading")}>All results are hidden.</p>
    <p className={getElement("heading")}>Try adjusting confidence threshold.</p>
  </div>
}
