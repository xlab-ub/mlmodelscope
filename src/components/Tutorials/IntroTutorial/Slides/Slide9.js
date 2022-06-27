import {ReactComponent as GreenCheck} from "../../../../resources/icons/green-check.svg";
import {ReactComponent as GreenLine} from "../../../../resources/icons/green-scroll-line.svg";
import {ReactComponent as RedX} from "../../../../resources/icons/red-x.svg";
import React from "react";
import useBEMNaming from "../../../../common/useBEMNaming";
import {ReactComponent as InfoIcon} from "../../../../resources/icons/info-icon.svg";
import "./Slide9.scss";


export default function Slide9(props) {
  const {getElement} = useBEMNaming("intro-tutorial-slide-9")

  return <>
    <p className={getElement("intro-text")}>
      Comparing Models
    </p>
    <p className={getElement("title")}>
      Model 1 is better at identifying our plant.
    </p>
    <p className={getElement("sub-title")}>
      Model 2 is 90% sure our plant is a turkey in the image. This is incorrect.
    </p>

    <div className={getElement("model-cards")}>
      <div className={getElement("model-card model-card-success")}>
        <GreenCheck className={getElement("model-card-icon")}/>

        <div className={getElement("model-card-inner")}>
          <p className={getElement("model-card-title")}>
            Model 1
          </p>

          <div className={getElement("model-card-output")}>
            <p className={getElement("model-card-output-title")}>
              Snake Plant
            </p>
            <p className={getElement("model-card-output-result")}>
              90%
            </p>
          </div>
        </div>

      </div>
      <div className={getElement("model-card model-card-failure")}>
        <RedX className={getElement("model-card-icon")}/>

        <div className={getElement("model-card-inner")}>
          <p className={getElement("model-card-title")}>
            Model 2
          </p>

          <div className={getElement("model-card-output")}>
            <p className={getElement("model-card-output-title")}>
              Turkey
            </p>
            <p className={getElement("model-card-output-result")}>
              98%
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={getElement("explanation")}>
      <InfoIcon className={getElement("explanation-info")}/>
      <p className={getElement("explanation-text")}>
        As an app builder, if I were building an application for identifying plants, this tells me that I would want to
        use <b> Model 1 </b> instead of Model 2.
      </p>
    </div>

    <button className={getElement("cta")} onClick={() => props.goToSection(props.index + 1)}>
      Let's wrap up the basics
    </button>

    <GreenLine className={getElement("scroll-line")}/>
  </>
}
