import React, { Component } from "react";
import ModelDetailPage from "../components/ModelDetailPage/ModelDetailPage"
import {useParams} from "react-router-dom";
import GetApiHelper from "../helpers/api";

export default class ModelDetailContainer extends Component{
  constructor(props){
    super(props);
    this.api = GetApiHelper();
    this.modelId = this.props.match.params.modelId;
    this.state = {
      model: null,
      trialId: null
    }
  }

  componentDidMount() {
    this.getModel();
  }

  componentWillUnmount() {
    if (this.trialSubscription)
      this.trialSubscription.unsubscribe();
  }

  getModel(){
    this.api.ActiveModel.subscribe({
      next: (model) => {
        this.setState({model: model[0]});
      }
    });
    this.api.getModel(this.modelId);
  }

  render(){
    return(
      <ModelDetailPage model={this.state.model} onRunModelClicked={this.runModel} trialOutput={this.state.trialOutput}/>
    )
  }

  runModel = async (inputUrl) => {
    this.trialSubscription = this.api.runTrial(this.state.model, inputUrl).subscribe({
      next: trial => this.setState({trialOutput: trial})
    });
  }

  // lookupTrial = async (trialId) => {
  //   const trial = await this.api.getTrial(trialId);
  //   this.setState({trialOutput: trial});
  //
  //   if (trial.completed_at === undefined) {
  //     setTimeout(() => this.lookupTrial(trialId), 1000);
  //   }
  // }
}
