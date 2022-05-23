import React, {Component} from "react";
import "./ModelTag.scss";
import Task from "../../helpers/Task";

export default class ModelTag extends Component {
  render() {
    let className = "model-tag";
    if (!!this.props.type && this.props.type != "") {
      className = `${className} -${this.props.type}`;
    }
    let Icon = (() => <></>);

    if (this.props.type === "task") {
      let task = Task.getStaticTask(this.props.content);
      Icon = task.Icon;
    }


    return (
      <span className={className}><Icon className={"model-tag__icon"}/> {this.props.content}</span>
    );
  }
}
