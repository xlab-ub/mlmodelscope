import React, {useRef} from 'react';
import "./HomePage.scss";
import useBEMNaming from "../../common/useBEMNaming";
import {HomePageMainSection} from "./HomePageMainSection";
import {MachineLearningOverview} from "./MachineLearningOverview";
import {TaskExamples} from "./TaskExamples";

export default function HomePage(props) {
  const {getBlock} = useBEMNaming("home-page");

  const modelDetailsRef = useRef();


  return (
    <div className={getBlock()}>
      <HomePageMainSection modelDetailsRef={modelDetailsRef}/>
      <MachineLearningOverview modelDetailsRef={modelDetailsRef}/>
      <TaskExamples {...props}/>
    </div>
  )
}
