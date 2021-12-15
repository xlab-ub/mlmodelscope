import React, { Component } from "react";
import "./FilterPanel.css"

export default class FilterPanel extends Component{
  OnClickFramework = (e) => {
    console.log("On click handler called");
    let target = e.target;
    let tag = target.innerHTML;
    console.log(tag);

    if(target.className == "InactiveTag" && tag != null){
      this.props.toggleFramework(tag);
    }
  }

  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        <p>Framework</p>
        <button className="InactiveTag" onClick={this.OnClickFramework}>Onnxruntime</button>
        <button className="InactiveTag" onClick={this.OnClickFramework}>MXNet</button>
        <button className="InactiveTag" onClick={this.OnClickFramework}>PyTorch</button>
        <button className="InactiveTag" onClick={this.OnClickFramework}>TensorFlow</button>
      </div>
    );
  }
}
