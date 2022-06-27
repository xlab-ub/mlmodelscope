import React from "react";
import useBEMNaming from "../../common/useBEMNaming";
import {HomePageSectionHeading} from "./HomePageSectionHeading";
import "./TutorialSection.scss";
import {ReactComponent as TutorialGraphic} from "../../resources/icons/home-page-tutorial.svg";

export default function TutorialSection(props) {
  const {getBlock, getElement} = useBEMNaming("home-page-tutorial-section");

  return <div ref={props.modelDetailsRef} className={getBlock()}>
    <div className={getElement("text-area")}>
      <HomePageSectionHeading
        title={"New to machine learning?"}
        subtitle={"If you’ve been curious about machine learning, but don’t know where to start, head over to our tutorial page as we walk you through the basics. We’ll walk you through what machine learning is, how machine learning uses models to make predictions, and what type of things machine learning can do."}
      />
      <a href={"/intro-tutorial"} className={getElement("cta")}>
        Start with our intro tutorial
      </a>

    </div>
    <div className={getElement("graphic-area")}>
      <TutorialGraphic/>
    </div>
  </div>
}
