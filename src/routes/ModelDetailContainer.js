import React, { Component } from "react";
import ModelDetailPage from "../components/ModelDetailPage/ModelDetailPage"
import { withRouter } from "react-router-dom";
import GetApiHelper from "../helpers/api";

class ModelDetailContainer extends Component{
  constructor(props) {
    super(props);

    let { modelId, experimentId } = this.props.match.params;
    this.api = GetApiHelper();
    this.modelId = modelId;

    if (!!experimentId)
      this.getExperiment(experimentId);

    this.state = {
      model: null,
    }
  }

  componentDidMount() {
    this.getModel();
  }

  componentWillUnmount() {
    if (this.experimentSubscription)
      this.experimentSubscription.unsubscribe();

    if (this.trialSubscription)
      this.trialSubscription.unsubscribe();

    if (this.modelSubscription)
      this.modelSubscription.unsubscribe();
  }

  getModel(){
    this.modelSubscription = this.api.ActiveModel.subscribe({
      next: (model) => {
        this.setState({model: model[0]});
      }
    });
    this.api.getModel(this.modelId);
  }

  render() {
    return (
      <ModelDetailPage model={this.state.model} onBackToModelClicked={this.backToModel} onRunModelClicked={this.runModel} trialOutput={this.state.trialOutput} compare={this.compareModels}/>
    )
  }

  backToModel = () => {
    this.props.history.push(`/model/${this.modelId}`);
  }

  runModel = async (inputUrl) => {
    const response = await this.api.runTrial(this.state.model, inputUrl);
    this.props.history.push(`/model/${this.modelId}/experiment/${response.experimentId}`);
  }

  compareModels = () => {
    this.props.history.push(`/experiment/${this.state.experiment.id}`);
  }

  getTrial = async (trialId) => {
    this.trialSubscription = this.api.getTrial(trialId).subscribe({
      next: trialOutput => this.setState({ trialOutput })
    });
  }

  getExperiment = async (experimentId) => {
    this.experimentSubscription = this.api.getExperiment(experimentId).subscribe({
      next: experiment => {
        this.getTrial(experiment.trials[0].id);
        this.setState({experiment});
      }
    });
  }
}

export default withRouter(ModelDetailContainer);
