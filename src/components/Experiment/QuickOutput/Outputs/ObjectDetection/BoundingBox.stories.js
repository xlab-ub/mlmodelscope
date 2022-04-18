import kitty from '../../../../../stories/assets/kitty-large.jpg';
import React from 'react';
import BoundingBox from "./BoundingBox";
import {TestBoundingBox, TestBoundingBox2} from './TestData/TestFeatures';

export default {
  title: "Experiments/Bounding Box",
  component: BoundingBox
};


const Template = (args) => <div style={{position: "relative", margin: "20px auto"}}>
  <img style={{maxWidth: "100%", height: "auto"}} src={kitty} alt={"cat"}/>
  <div style={{"width": "100%", height: "100%", position: "absolute", top: 0, left: 0}}>
    <BoundingBox {...TestBoundingBox.bounding_box} />
    <BoundingBox {...TestBoundingBox2.bounding_box}/>
  </div>
</div>

export const Default = Template.bind({});
