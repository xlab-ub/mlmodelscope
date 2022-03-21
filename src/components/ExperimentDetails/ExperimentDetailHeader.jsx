import React, {Component} from 'react';

export default class ExperimentDetailHeader extends Component {
  static defaultProps = {
    title: 'Model comparison',
  }

  render() {
    return (
      <div className="experiment-detail-header">
        <h1 className="experiment-detail-header__title">{ this.props.title }</h1>
      </div>
    );
  }
}
