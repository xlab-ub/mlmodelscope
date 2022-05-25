import React, {Component} from "react";
import Task from "../../helpers/Task";
import Framework from "../../helpers/Framework";
import {ReactComponent as MicroChip} from "../../resources/icons/microchip-solid.svg";

export default class FilterGroup extends Component {
  activeTag = "active";
  inactiveTag = "inactive";

  onClick = (name) => {
    let filterGroupName = this.props.filterGroup.header;
    let select = this.props.filterGroup.select;
    this.props.toggleFilter(filterGroupName, select, name);
  }

  render() {
    let options = this.props.filterGroup.options;
    let lowerCaseGroupName = this.props.filterGroup.header.toLowerCase();
    let buttons = [];
    for (let i = 0; i < options.length; i++) {
      let classNameAddon = options[i].isActive ? this.activeTag : this.inactiveTag;
      let className = `filter-group__button filter-group__button-${lowerCaseGroupName}-${classNameAddon}`;
      let text = options[i].label;
      if (lowerCaseGroupName === "tasks") {
        let task = Task.getStaticTask(options[i].name);
        text = <>
          <task.Icon className={"filter-group__button-icon"}/>
          {text}</>
      }
      if (lowerCaseGroupName === "frameworks") {
        let framework = Framework.getStaticFramework(options[i].name);
        text = <>
          <framework.Icon className={"filter-group__button-icon"}/>
          {text}</>
      }
      if (lowerCaseGroupName === "machines") {
        text = <>
          <MicroChip className={"filter-group__button-icon filter-group__button-icon-machine"}/>
          {text}
        </>
      }
      buttons.push(<button key={i} className={className} data-group-name={lowerCaseGroupName}
                           onClick={() => this.onClick(options[i].name)}>{text}</button>);
    }

    return (
      <div className="filter-group">
        <p className="filter-group__header">{this.props.filterGroup.header}</p>
        <p className="filter-group__description">{this.props.filterGroup.description}</p>
        {buttons}
      </div>
    );
  }
}
