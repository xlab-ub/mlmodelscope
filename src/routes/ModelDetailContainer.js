import React, { Component } from "react";
import ModelDetailPage from "../components/ModelDetailPage/ModelDetailPage"
import { withRouter } from "react-router-dom";
import GetApiHelper from "../helpers/api";

class ModelDetailContainer extends Component{
  constructor(props) {
    super(props);

    let { modelId, trialId } = this.props.match.params;
    this.api = GetApiHelper();
    this.modelId = modelId;

    if (!!trialId)
      this.getTrial(trialId);

    this.state = {
      model: null,
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

  render() {
    return (
      <ModelDetailPage model={this.state.model} onBackToModelClicked={this.backToModel} onRunModelClicked={this.runModel} trialOutput={this.state.trialOutput}/>
    )
  }

  backToModel = () => {
    this.props.history.push(`/model/${this.modelId}`);
  }

  runModel = async (inputUrl) => {
    const trialId = await this.api.runTrial(this.state.model, inputUrl);
    this.props.history.push(`/model/${this.modelId}/trial/${trialId}`);
  }

  getTrial = async (trialId) => {
    this.trialSubscription = this.api.getTrial(trialId).subscribe({
      next: trialOutput => this.setState({ trialOutput })
    });
  }
}

export default withRouter(ModelDetailContainer);
