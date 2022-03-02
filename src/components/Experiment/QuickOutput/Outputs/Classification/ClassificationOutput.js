import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import TopPrediction from "./TopPrediction";
import Prediction from "./Prediction";

export default class ClassificationOutput extends BEMComponent {
  static defaultProps = {
    features: []
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
        <h3 className={this.element('title')}>Output</h3>
        <div className={this.element('subtitle')}>What this model thinks the image is.</div>
        <TopPrediction feature={this.props.features[0]} />
        <div className={this.element('predictions')}>
          {this.props.features.slice(1, 3).map(this.makePrediction)}

          <div className={this.element('prediction-overflow')}>
            {this.props.features.slice(3).map(this.makePrediction)}
          </div>
          <a className={this.element('expand')} onClick={this.expandClicked} />
        </div>
      </div>
    );
  }

  makePrediction = (feature, index) => {
    return <Prediction key={index} feature={feature} />
  }

  expandClicked = () => {
    this.setState({
      predictionsExpanded: !this.state.predictionsExpanded
    });
  }
}
