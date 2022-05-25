import React from 'react';
import "./OutputDuration.scss";
import useBEMNaming from "../../../../../../common/useBEMNaming";
import DurationConverter from "../utils/DurationConverter";
import {ReactComponent as Timer} from "../../../../../../resources/icons/timer-solid.svg";

export default function OutputDuration({duration}) {
  const {getElement, getBlock} = useBEMNaming("output-duration");

  return <div className={getBlock()}><Timer className={getElement("icon")}/><p
    className={getElement("label")}>Duration: <span
    className={getElement("seconds")}>{DurationConverter(duration)}</span></p></div>
}
