import React, { Component } from "react";
import ModelDetailHeader from "./ModelDetailHeader";
import QuickInput from "../Experiment/QuickInput/QuickInput";
import birdy from '../../stories/assets/birdy.png'
import crabby from '../../stories/assets/crabby.png';
import kitty from '../../stories/assets/kitty.png';

export default class ModelDetailPage extends Component {
  render(){
    return(
      <div className="model-detail-page">
        <ModelDetailHeader model={this.props.model}/>
        <div className="model-detail-page__quick-input">
          <QuickInput sampleInputs={[kitty, crabby, birdy]}/>
        </div>
      </div>
    )
  }
}
