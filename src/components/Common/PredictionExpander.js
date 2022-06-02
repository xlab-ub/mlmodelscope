import React from 'react';
import Prediction from "../Experiment/QuickOutput/Outputs/Classification/Prediction";
import BEMComponent from "./BEMComponent";
import "./PredictionExpander.scss";

export default class PredictionExpander extends BEMComponent {
  static defaultProps = {
    className: "prediction-expander",
    predictions: []
  }

  constructor(props) {
    super(props);

    this.state = {
      predictionsExpanded: this.props.showAll === true
    }

    this.modifiers = {
      expand: {
        collapsed: (state) => !state.predictionsExpanded
      },
      "prediction-overflow": {
        collapsed: (state) => !state.predictionsExpanded
      }
    }
  }

  filterPredictions() {
    let globalValue = this.props.globalValue ?? -1;
    return this.props.predictions.filter(prediction => (prediction.probability * 100) > globalValue);
  }

  render() {
    let predictions = this.filterPredictions();

    return (
      <div className={this.block()}>
        <div className={this.element('predictions')}>
          {predictions.slice(1, 3).map(this.makePrediction)}

          <div className={this.element('prediction-overflow')}>
            {predictions.slice(3).map(this.makePrediction)}
          </div>
        </div>
        {this.makeExpanderButton()}
      </div>
    )
  }

  makePrediction = (feature, index) => {
    return <Prediction key={index} feature={feature}/>
  }

  makeExpanderButton() {
    if (!this.props.showAll && this.props.predictions.length > 3) {
      return (
        <button className={this.element('expand')} onClick={this.expandClicked}>{this.makeExpanderLabel()}</button>)
    }
  }

  makeExpanderLabel = () => {
    return `${this.state.predictionsExpanded ? 'Hide' : 'Show'} all predictions`;
  }

  expandClicked = () => {
    if (this.props.toggleShowAll) this.props.toggleShowAll();
    else
      this.setState({
        predictionsExpanded: !this.state.predictionsExpanded
      });
  }
}
