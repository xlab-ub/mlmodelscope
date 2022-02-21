import React, {Component} from 'react';
import "./QuickInput.scss";

export default class QuickInput extends Component {
  constructor(props) {
    super(props);

    this.classname = "quick-input";
    this.tabs = [
      { id: 'sample-input', title: 'Sample inputs' },
      { id: 'upload-input', title: 'Upload' },
      { id: 'url-input', title: 'URL' }
    ];
    this.state = {
      selectedTab: 0
    }
  }

  render() {
    return (
      <div className={this.classname}>
        <div className={`${this.classname}__title`}>Try this model</div>
        <div className={`${this.classname}__subtitle`}>Choose an image to run through this model and see it's predictions.</div>
        <div className={`${this.classname}__tabs`}>
          <div className={`${this.classname}__tab-titles`} role="tablist">
            {this.tabs.map((tab, index) => this.makeTabTitle(index, tab))}
          </div>
          {this.tabs.map((tab, index) => this.makeTab(index, tab))}
        </div>
        <button className={`${this.classname}__run-model`} />
      </div>
    );
  }

  makeTabTitle = (index, tab) => {
    let classes = `${this.classname}__tab-title`;
    if (index === 0)
      classes = `${classes} ${this.classname}__tab-title--selected`;

    return (
      <button key={index}
              className={classes}
              role="tab"
              aria-controls={`${tab.id}-panel`}
              aria-selected={`${index === this.state.selectedTab}`}
              id={tab.id}
              onClick={() => { this.selectTab(index) }}
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
    let classes = `${this.classname}__tab`;
    if (index === this.state.selectedTab)
      classes = `${classes} ${this.classname}__tab--selected`;

    return (
      <div key={index} className={classes} role="tabpanel" aria-labelledby={`${tab.id}`} id={`${tab.id}-panel`}></div>
    )
  }
}
