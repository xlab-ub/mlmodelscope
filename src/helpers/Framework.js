import React from 'react';
import {ReactComponent as Tensorflow} from "../resources/icons/tensorflow-icon.svg";
import {ReactComponent as Pytorch} from "../resources/icons/pytorch-icon.svg";
import {ReactComponent as Onnx} from "../resources/icons/onnx_runtime.svg";
import {ReactComponent as MXNet} from "../resources/icons/mxnet.svg";

export default class Framework {
  constructor(options) {
    this.Icon = options.Icon ?? (() => <></>)
  }

  static getStaticFramework(frameworkName) {
    switch (frameworkName) {
      case tensorflow:
        return new Framework({
          Icon: (props) => <Tensorflow {...props} />
        })
      case pytorch:
        return new Framework({
          Icon: (props) => <Pytorch {...props} />
        })
      case onnx_runtime:
        return new Framework({
          Icon: (props) => <Onnx {...props} />
        })
      case mx_net:
        return new Framework({
          Icon: (props) => <MXNet {...props} />
        })
    }

    return new Framework({Icon: () => <></>})
  }
}


export const mx_net = "MXNet";
export const pytorch = "PyTorch";
export const tensorflow = "TensorFlow";
export const onnx_runtime = "Onnxruntime"
