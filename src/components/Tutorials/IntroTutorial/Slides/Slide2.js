import useBEMNaming from "../../../../common/useBEMNaming";
import React from 'react';
import BirdPicture from '../../../../resources/img/tutorial-bird-1.png'
import PlantPicture from '../../../../resources/img/tutorial-plant-1.png'
import "./Slide2.scss";

export default function Slide2(props) {
  const {getElement} = useBEMNaming("intro-tutorial-slide-2");

  return <>
    <div className={getElement("text-area")}>
      <p className={getElement("intro-text")}>Intro to machine learning</p>
      <p className={getElement("title")}>Machine learning is all around you!</p>

      <p className={getElement("sub-title")}>People use machine learning to help them identify things like birds or
        plants.</p>

      <button className={getElement("cta")} onClick={() => props.goToSection(props.index + 1)}>
        Let's try a real world example
      </button>
    </div>
    <div className={getElement("img-area")}>
      <img src={PlantPicture} alt={"picture of a plant"} className={getElement("img-1")}/>

      <img src={BirdPicture} alt={"picture of a bird"} className={getElement("img-2")}/>
    </div>
  </>
}
