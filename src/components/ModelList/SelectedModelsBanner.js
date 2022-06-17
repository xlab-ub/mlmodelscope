import React from "react";
import Button from "../Buttons/Button"
import BEMComponent from "../Common/BEMComponent";
import {ReactComponent as MenuToggle} from "../../resources/icons/menu-toggle.svg";
import SelectedModelCard from "./SelectedModelCard";
import './_SelectedModelsBanner.scss';

export default class SelectedModelsBanner extends BEMComponent {
  static defaultProps = {
    className: "selected-models-banner",
    selectedModels: [],
    deselectModel: () => {
    },
    clearModels: () => {
    },
    runModels: () => {
    },
  }

  constructor(props) {
    super(props);

    this.modifiers = {
      'toggle-icon': {
        open: (state) => state.open,
      },
      list: {
        open: (state) => state.open,
      },
      controls: {
        open: (state) => state.open,
      }
    };

    this.state = {
      open: false,
    };
  }

  isOpen = (state) => state.open === true;
  hasCards = (props) => props.selectedModels.length > 0;

  open = () => this.setState({open: true});
  close = () => this.setState({open: false});

  screenIsLargeEnough = () => window.innerWidth > 925;

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    if (!this.isOpen(this.state) && this.hasCards(this.props) && !this.hasCards(prevProps) && this.screenIsLargeEnough())
      this.open();
    else if (this.isOpen(this.state) && !this.hasCards(this.props) && this.hasCards(prevProps))
      this.close();
  }

  render() {
    return (
      <div className={this.block()}>
        <div className={this.element('controls')}>
          <div className={this.element("toggle-col")}>
            <button className={this.element('toggle')} onClick={() => this.toggle()}>
              <MenuToggle className={this.element('toggle-icon')}/>
              <span className={this.element("hide-text")}>
              {this.state.open ? "Hide" : "Show"}
            </span>
            </button>
          </div>
          <div className={this.element("controls-col")}>

            <span className={this.element('toggle-text')}>
              Models added: <span className={this.element("red-circle")}>{this.props.selectedModels.length}</span>
            </span>
            {this.getRemoveButton()}
            <div className={this.element('run')}>
              <Button content="Run models to compare" isPrimary={false} isSmall={true}
                      onClick={() => this.props.runModels(this.props.selectedModels)}/>
            </div>
          </div>
        </div>
        <div className={this.element('list')}>
          {this.getModelCards()}
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
        <button className={this.element('remove')} onClick={this.props.clearModels}>
          Remove all
        </button>
      );
    }
  }

  getModelCards() {
    let modelKey = 0;

    return this.props.selectedModels.map(model => <SelectedModelCard key={modelKey++} model={model} remove={() => {
      this.props.deselectModel(model);
    }}/>)
  }
}
