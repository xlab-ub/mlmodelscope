import React, {Component} from 'react';

export default class BEMComponent extends Component {
  constructor(props) {
    super(props);

    this.blockName = !!this.props.className ?
      this.props.className :
      this.constructor.name
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase();

    this.modifiers = {};
  }

  block = () => {
    return this.blockName;
  }

  element = (el, extra) => {
    const modifiers = this.modifiers[el];
    let classes = [`${this.blockName}__${el}`];

    if (typeof(modifiers) === 'object') {
      Object.keys(modifiers).map(key => {
        return {
          modifier: key,
          active: modifiers[key](this.state, extra)
        }
      })
        .filter(m => m.active === true)
        .map(m => classes.push(`${this.blockName}__${el}--${m.modifier}`));
    }

    return classes.join(' ');
  }
}
