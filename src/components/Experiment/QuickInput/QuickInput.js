import React from 'react';
import BEMComponent from "../../Common/BEMComponent";
import SampleInputsTab from "./SampleInputsTab";
import UploadInputsTab from "./UploadInputsTab";
import URLInputsTab from "./URLInputsTab";
import "./QuickInput.scss";
import Task from "../../../helpers/Task";


export default class QuickInput extends BEMComponent {
  static defaultProps = {
    className: "quick-input",
    sampleInputs: []
  }

  constructor(props) {
    super(props);

    this.modifiers = {
      tab: {
        selected: (state, index) => state.selectedTab === index
      },
      "tab-title": {
        selected: (state, index) => state.selectedTab === index
      }
    };

    this.state = {
      selectedInputUrl: "",
      selectedTab: 0
    }
  }


  getTabs = () => [
    {
      id: 'sample-input',
      title: 'Sample inputs',
      component: SampleInputsTab,
      props: {sampleInputs: this.props.sampleInputs}
    },
    {id: 'upload-input', title: 'Upload', component: UploadInputsTab},
    {id: 'url-input', title: 'URL', component: URLInputsTab}
  ];

  render() {
    const task = Task.getStaticTask(this.props.model.output.type);
    const tabs = this.getTabs();
    return (
      <div className={this.block()}>
        {!this.props.hideHeader && <>
          <h2 className={this.element('title')}>Try this model</h2>
          <div className={this.element('subtitle')}>{task.inputText}</div>
        </>}
        <div className={this.element('tabs')}>
          <div className={this.element('tab-titles')} role="tablist">
            {tabs.map((tab, index) => this.makeTabTitle(index, tab))}
          </div>
          {tabs.map((tab, index) => this.makeTab(index, tab))}
        </div>
        <button className={this.element('run-model')} disabled={this.state.selectedInputUrl === ""}
                onClick={() => this.runModel()}>Run model and see results
        </button>
      </div>
    );
  }

  runModel = () => {
    if (typeof (this.props.onRunModelClicked) === 'function')
      this.props.onRunModelClicked(this.state.selectedInputUrl);
  }

  selectInput = (url) => {
    this.setState({
      selectedInputUrl: url
    });
  }

  makeTabTitle = (index, tab) => {
    return (
      <button key={index}
              className={this.element('tab-title', index)}
              role="tab"
              aria-controls={`${tab.id}-panel`}
              aria-selected={`${index === this.state.selectedTab}`}
              id={tab.id}
              onClick={() => {
                this.selectTab(index)
              }}
      >
        {tab.title}
      </button>
    )
  }

  selectTab = (index) => {
    this.setState({
      selectedTab: index
    });
  }

  makeTab = (index, tab) => {
    let Component = tab.component || (() => {
      return <div/>
    });

    return (
      <div key={index} className={this.element('tab', index)} role="tabpanel" aria-labelledby={`${tab.id}`}
           id={`${tab.id}-panel`}>
        <Component inputSelected={this.selectInput} {...tab.props} />
      </div>
    )
  }
}
