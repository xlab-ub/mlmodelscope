import useBEMNaming from "../../common/useBEMNaming";
import React from "react";
import "./HomePageSectionHeading.scss"

export function HomePageSectionHeading(props) {
  const {getBlock, getElement} = useBEMNaming("home-page-section");

  return <div className={getBlock()}>
    <p className={getElement("title")}>
      {props.title}
    </p>
    <p className={getElement("subtitle")}>
      {props.subtitle}
    </p>
  </div>
}
