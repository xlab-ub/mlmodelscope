import React, { Component } from "react";

export default class FilterPanel extends Component{
  render() {
    return(
      <div style={{background: "gainsboro", padding: "12px"}}>
        <p>Framework</p>
        <button>Jax</button>
        <button>MXNet</button>
        <button>PyTorch</button>
        <button>TensorFlow</button>
      </div>
    );
  }
}
