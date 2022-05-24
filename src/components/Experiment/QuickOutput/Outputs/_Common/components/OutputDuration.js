import React from 'react';
import "./OutputDuration.scss";
import useBEMNaming from "../../../../../../common/useBEMNaming";
import DurationConverter from "../utils/DurationConverter";

export default function OutputDuration({duration}) {
  const {getElement} = useBEMNaming("output-duration");

  return <p className={getElement("label")}>Duration: <span
    className={getElement("seconds")}>{DurationConverter(duration)}</span></p>
}
