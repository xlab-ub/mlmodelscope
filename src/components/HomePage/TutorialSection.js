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
        title={"New to MLModelscope?"}
        subtitle={"If you’ve been curious about machine learning models, but don’t know where to start, head over to our tutorial page as we walk you through the basic functionality of this website. "}
        subtitle2={"We’ll walk you through what machine learning models are, how machine learning uses models to make predictions, how you can compare models, and explore other model tasks on this site."}
      />
      <a href={"/intro-tutorial"} className={getElement("cta")}>
        Start with our tutorial
      </a>

    </div>
    <div className={getElement("graphic-area")}>
      <TutorialGraphic/>
    </div>
  </div>
}
