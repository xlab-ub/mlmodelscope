import useBEMNaming from "../../common/useBEMNaming";
import Header from "../Header/Header";
import Button from "../Buttons/Button";
import React from "react";
import "./HomePageMainSection.scss";
import {ReactComponent as ArrowIcon} from "../../resources/icons/arrow-right-white.svg";

export function HomePageMainSection(props) {
  const {getBlock, getElement} = useBEMNaming("home-page-main");

  const scrollToModelDetails = () => {
    const ref = props.modelDetailsRef;
    if (ref.current)
      ref.current.scrollIntoView({behavior: "smooth"});
  }

  return <>
    <Header splash/>
    <div className={getBlock()}>
      <div className={getElement("background-image")}>
        <div className={getElement("fun-gradient")}/>
        <div className={getElement("tint")}/>
      </div>
      <div className={getElement("content-container")}>
        <h1 className={getElement("title")}>Discover and compare machine learning models.</h1>
        <hr className={getElement("divider")}/>
        <h2 className={getElement("subtitle")}>
          MLModelScope is an open source platform for evaluating and profiling machine learning models to help
          app builders, data scientists, and system developers discover, compare and optimize models, frameworks and
          systems.
        </h2>

        <Button content="View models to compare" link={"/models"} isPrimary={false} isSmall={false}/>

      </div>
      <button onClick={scrollToModelDetails} className={getElement("jump-link")}>
        New to machine learning? <ArrowIcon className={getElement("jump-link-icon")}/>
      </button>

    </div>
  </>;
}
