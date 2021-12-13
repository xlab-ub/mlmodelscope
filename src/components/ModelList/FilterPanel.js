import React, { Component } from "react";
import "./FilterPanel.css"

export default class FilterPanel extends Component{
  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        <p>Framework</p>
        <button className="ActiveTag" onClick={OnSelectFramework}>Any</button>
        <button className="InactiveTag" onClick={OnSelectFramework}>Onnxruntime</button>
        <button className="InactiveTag" onClick={OnSelectFramework}>MXNet</button>
        <button className="InactiveTag" onClick={OnSelectFramework}>PyTorch</button>
        <button className="InactiveTag" onClick={OnSelectFramework}>TensorFlow</button>
      </div>
    );
  }
}

function OnSelectFramework(e){
  var target = e.target;
  var newClass = target.className == "ActiveTag"?"InactiveTag":"ActiveTag";
  target.className = newClass;
}
