import React from 'react';
import BEMComponent from "../../../../Common/BEMComponent";
import './PendingOutput.scss';

export default class PendingOutput extends BEMComponent {
  render() {
    return (
      <div className={this.block()}>
        <h3 className={this.element('title')}>Output</h3>
        <div className={this.element('subtitle')}>Fetching results...</div>
        <div className={this.element('spinner-container')}>
          <div className={this.element('spinner')}>

          </div>
        </div>
      </div>
    );
  }
}
