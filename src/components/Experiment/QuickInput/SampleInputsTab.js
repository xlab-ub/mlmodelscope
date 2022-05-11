import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import "./SampleInputsTab.scss";

export default class SampleInputsTab extends BEMComponent {
  static defaultProps = {
    className: "sample-inputs",
    inputSelected: undefined,
    sampleInputs: []
  }

  constructor(props) {
    super(props);

    this.modifiers = {
      input: {
        selected: (state, index) => state.selectedIndex === index,
        unselected: (state, index) => state.selectedIndex >= 0 && state.selectedIndex !== index
      }
    }

    this.state = {
      selectedIndex: -1
    }
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('title')}>Select a sample image</div>
        <div className={this.element('list')}>
          {this.props.sampleInputs.map(this.makeSampleInput)}
        </div>
      </div>
    );
  }

  makeSampleInput = (url, index) => {
    return (
      <div key={index} className={this.element('input', index)}>
        <img src={url} onClick={() => this.selectInput(index)}/>
      </div>
    )
  };

  selectInput = (index) => {
    this.setState({
      selectedIndex: index
    });

    if (typeof (this.props.inputSelected) === 'function')
      this.props.inputSelected(this.props.sampleInputs[index]);
  }
}
