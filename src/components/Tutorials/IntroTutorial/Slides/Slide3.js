import React from 'react';
import useBEMNaming from "../../../../common/useBEMNaming";
import PlantPicture from '../../../../resources/img/tutorial-plant-1.png'
import "./Slide3.scss";

export default function Slide3(props) {
  const {getElement} = useBEMNaming("intro-tutorial-slide-3");


  return <>
    <p className={getElement("intro-text")}>Model Outputs</p>
    <p className={getElement("title")}>Can a machine learning model identify what type of plant this is?</p>

    <img src={PlantPicture} alt={"a picture of a plant"} className={getElement("img")}/>

    <button className={getElement("cta")} onClick={() => props.goToSection(props.index + 1)}>
      Let's try it out!
    </button>
  </>
}
