import React, { Component } from "react";
import ModelDetailHeader from "./ModelDetailHeader";
import {useParams} from "react-router-dom";
import GetApiHelper from "../../helpers/api";

export default class ModelDetailPage extends Component{
  constructor(props){
    super(props);
    this.api = GetApiHelper();
    this.modelId = this.props.match.params.modelId;
    this.state = {
      model: null
    }
  }

  componentDidMount() {
    this.getModel();
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
      <div>
        <ModelDetailHeader model={this.state.model}/>
      </div>
    )
  }
}
