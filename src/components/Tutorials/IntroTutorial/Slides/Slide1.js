import useBEMNaming from "../../../../common/useBEMNaming";
import React from "react";
import "./Slide1.scss";

export default function Slide1(props) {
  const {getBlock, getElement} = useBEMNaming("intro-tutorial-slide-1");


  return <>
    <p className={getElement("intro-text")}>Intro to machine learning</p>
    <h1 className={getElement("title")}>What is machine learning?</h1>
    <button className={getElement("cta")} onClick={() => props.goToSection(props.index + 1)}>Let's start learning
    </button>
  </>
}
