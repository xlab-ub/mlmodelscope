import React, {Component} from 'react';
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
      predictionsExpanded: false
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

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('predictions')}>
          {this.props.predictions.slice(1, 3).map(this.makePrediction)}

          <div className={this.element('prediction-overflow')}>
            {this.props.predictions.slice(3).map(this.makePrediction)}
          </div>
        </div>
        { this.makeExpanderButton() }
      </div>
    )
  }

  makePrediction = (feature, index) => {
    return <Prediction key={index} feature={feature} />
  }

  makeExpanderButton() {
    if (this.props.predictions.length > 3) {
      return (<button className={this.element('expand')} onClick={this.expandClicked}>{this.makeExpanderLabel()}</button>)
    }
  }

  makeExpanderLabel = () => {
    return `${this.state.predictionsExpanded ? 'Hide' : 'Show'} all predictions`;
  }

  expandClicked = () => {
    this.setState({
      predictionsExpanded: !this.state.predictionsExpanded
    });
  }
}
