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
        <h1 className={getElement("title")}>Find out which machine learning models are best through your own
          experience.</h1>
        <hr className={getElement("divider")}/>
        <h2 className={getElement("subtitle")}>
          MLModelscope helps people without any programming experience to experience the power of machine learning and
          decide how and which machine learning models can solve your tasks the best.
        </h2>

        <Button content="View models to compare" link={"/models"} isPrimary={false} isSmall={false}/>

      </div>
      <button onClick={scrollToModelDetails} className={getElement("jump-link")}>
        New to MLModelscope? <ArrowIcon className={getElement("jump-link-icon")}/>
      </button>

    </div>
  </>;
}
