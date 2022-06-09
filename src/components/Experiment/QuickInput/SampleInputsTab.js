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
        selected: (state, url) => state.selectedIndex.indexOf(url.src) > -1,
        unselected: (state, index) =>
          state.selectedIndex.length >= 0 && state.selectedIndex.indexOf(index.src) === -1
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
      <button onClick={() => this.selectInput(index)} key={index} className={this.element(`input`, url)}>
        <img src={url.src} alt={url.alt}/>
      </button>
    )
  };

  selectInput = (index) => {

    if (this.props.multiple) {
      const selected = Array.from(this.state.selectedIndex);
      const url = this.props.sampleInputs[index].src;
      let storedIndex = selected.indexOf(url);
      if (storedIndex === -1) {
        selected.push(url);
      } else {
        selected.splice(storedIndex, 1);
      }
      this.setState({selectedIndex: selected});
      if (typeof (this.props.inputSelected) === 'function')
        this.props.inputSelected(selected);
    } else {
      this.setState({selectedIndex: [this.props.sampleInputs[index].src]})
      if (typeof (this.props.inputSelected) === 'function')
        this.props.inputSelected(this.props.sampleInputs[index].src, 0);
    }
  }
}
