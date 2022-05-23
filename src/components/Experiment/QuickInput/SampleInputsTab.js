import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import "./SampleInputsTab.scss";
import Task from "../../../helpers/Task";

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
        selected: (state, url) => state.selectedIndex.indexOf(url) > -1,
        unselected: (state, index) =>
          state.selectedIndex.length >= 0 && state.selectedIndex.indexOf(index) === -1
      }
    }

    this.state = {
      selectedIndex: []
    }
  }

  render() {
    const task = Task.getStaticTask(this.props.task);
    return (
      <div className={this.block()}>
        <div className={this.element('title')}><b>Select a sample image</b> to {task.inputText.toLowerCase()}</div>
        <div className={this.element('list')}>
          {this.props.sampleInputs.map(this.makeSampleInput)}
        </div>
      </div>
    );
  }

  makeSampleInput = (url, index) => {
    return (
      <div key={index} className={this.element(`input`, url)}>
        <img src={url} onClick={() => this.selectInput(index)}/>
      </div>
    )
  };

  selectInput = (index) => {

    if (this.props.multiple) {
      const selected = this.state.selectedIndex;
      const url = this.props.sampleInputs[index];
      let storedIndex = selected.indexOf(url);
      if (storedIndex === -1) {
        selected.push(url);
        this.props.addInput(url);
      } else {
        this.props.removeInput(url);
        selected.splice(index, 1);
      }
      this.setState({selectedIndex: selected});
      if (typeof (this.props.inputSelected) === 'function')
        this.props.inputSelected(this.props.sampleInputs[index]);
    } else {
      this.setState({selectedIndex: [this.props.sampleInputs[index]]})
      if (typeof (this.props.inputSelected) === 'function')
        this.props.inputSelected(this.props.sampleInputs[index], 0);
    }
  }
}
