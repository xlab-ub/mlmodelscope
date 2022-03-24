import React from "react";
import Button from "../Buttons/Button"
import BEMComponent from "../Common/BEMComponent";
import {ReactComponent as MenuToggle} from "../../resources/icons/menu-toggle.svg";
import SelectedModelCard from "./SelectedModelCard";
import './_SelectedModelsBanner.scss';

export default class SelectedModelsBanner extends BEMComponent {
  static defaultProps = {
    selectedModels: [],
    deselectModel: () => { alert('Deselected!') },
    runModels: () => { alert('Running now!')},
  }

  constructor(props) {
    super(props);

    this.modifiers = {
      'toggle-icon': {
        open: (state) => state.open,
      },
      list: {
        open: (state) => state.open,
      }
    };

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('controls')}>
          <button className={this.element('toggle')} onClick={() => this.toggle()}>
            <MenuToggle className={this.element('toggle-icon')} />
            <span className={this.element('toggle-text')}>
              Models selected to add to experiment: {this.props.selectedModels.length}
            </span>
          </button>
          { this.getRemoveButton() }
          <div className={this.element('run')}>
            <Button content="Run models" isPrimary={false} isSmall={true} onClick={() => this.props.runModels(this.props.selectedModels)} />
          </div>
        </div>
        <div className={this.element('list')}>
          { this.getModelCards() }
        </div>
      </div>
    );
  }

  toggle() {
    const newState = !this.state.open;
    this.setState({
      open: newState,
    });
  }

  getRemoveButton() {
    if (this.props.selectedModels.length > 0) {
      return (
        <button className={this.element('remove')}>
          Remove all
        </button>
      );
    }
  }

  getModelCards() {
    let modelKey = 0;

    return this.props.selectedModels.map(model => <SelectedModelCard key={modelKey++} model={model} remove={() => { this.props.deselectModel(model); }} />)
  }
}
