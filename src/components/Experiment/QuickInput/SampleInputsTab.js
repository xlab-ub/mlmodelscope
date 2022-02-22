import React, {Component} from 'react';

export default class SampleInputsTab extends Component {
  static defaultProps = {
    inputSelected: undefined,
    sampleInputs: []
  }

  constructor(props) {
    super(props);
    this.classname = "sample-inputs";
    this.state = {
      selectedIndex: -1
    }
  }

  render() {
    return (
      <div className={this.classname}>
        <div className={`${this.classname}__title`}>Select one of our sample images to run through the model</div>
        <div className={`${this.classname}__list`}>
          {this.props.sampleInputs.map(this.makeSampleInput)}
        </div>
      </div>
    );
  }

  makeSampleInput = (url, index) => {
    let classes = `${this.classname}__input`;
    if (this.state.selectedIndex === index)
      classes = `${classes} ${this.classname}__input--selected`;

    return (
      <div key={index} className={classes}>
        <img src={url} onClick={() => this.selectInput(index)} />
      </div>
    )
  };

  selectInput = (index) => {
    this.setState({
      selectedIndex: index
    });

    if (typeof(this.props.inputSelected) === 'function')
      this.props.inputSelected(this.props.sampleInputs[index]);
  }
}
