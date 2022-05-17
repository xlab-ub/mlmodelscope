import useBEMNaming from "../../common/useBEMNaming";
import Header from "../Header/Header";
import Button from "../Buttons/Button";
import React from "react";
import "./HomePageMainSection.scss";

export function HomePageMainSection() {
  const {getBlock, getElement} = useBEMNaming("home-page-main");


  return <div className={getBlock()}>
    <Header splash/>
    <div className={getElement("background-image")}>
      <div className={getElement("fun-gradient")}/>
      <div className={getElement("tint")}/>
    </div>
    <div className={getElement("content-container")}>
      <h1 className={getElement("title")}>Discover and compare state-of-the-art machine learning models</h1>
      <hr className={getElement("divider")}/>
      <h2 className={getElement("subtitle")}>
        MLModelScope is an open source platform for evaluating and profiling machine learning models to help
        app builders, data scientists, and system developers discover, compare and optimize models, frameworks and
        systems.
      </h2>
      <Button content="Browse model library" link={"/models"} isPrimary={false} isSmall={false}/>
    </div>

  </div>;
}
