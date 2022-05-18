import React from 'react';
import "./HomePage.scss";
import useBEMNaming from "../../common/useBEMNaming";
import {HomePageMainSection} from "./HomePageMainSection";
import {MachineLearningOverview} from "./MachineLearningOverview";
import {TaskExamples} from "./TaskExamples";

export default function HomePage(props) {
  const {getBlock} = useBEMNaming("home-page");

  return (
    <div className={getBlock()}>
      <HomePageMainSection/>
      <MachineLearningOverview/>
      <TaskExamples {...props}/>
    </div>
  )
}
