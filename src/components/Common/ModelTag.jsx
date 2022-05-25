import React, {Component} from "react";
import "./ModelTag.scss";
import Task from "../../helpers/Task";
import Framework from "../../helpers/Framework";
import {ReactComponent as Microchip} from "../../resources/icons/microchip-solid.svg";

export default class ModelTag extends Component {
  render() {
    let className = "model-tag";
    if (!!this.props.type && this.props.type != "") {
      className = `${className} -${this.props.type}`;
    }
    let Icon = (() => <></>);
    let classes = "";
    if (this.props.type === "task") {
      let task = Task.getStaticTask(this.props.content);
      Icon = task.Icon;
    }
    if (this.props.type === "framework") {
      let framework = Framework.getStaticFramework(this.props.content);
      Icon = framework.Icon;
    }
    if (this.props.type === "machine") {
      Icon = (props) => <Microchip {...props}></Microchip>
      classes = " model-tag__icon-machine"
    }


    return (
      <span className={className}><Icon className={"model-tag__icon" + classes}/> {this.props.content}</span>
    );
  }
}
