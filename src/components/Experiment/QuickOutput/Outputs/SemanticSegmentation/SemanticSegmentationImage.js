import useBEMNaming from "../../../../../common/useBEMNaming";
import React from "react";
import {colors, colorToRGBA} from "../_Common/utils/Colors";
import "./SemanticSegmentationImage.scss";


export function SemanticSegmentationImage(props) {
  const {getElement, getBlock} = useBEMNaming("semantic-segmentation-image");
  const overlayRef = React.createRef();
  let dataUri = null;

  const generateOverlayImage = () => {
    if (dataUri != null)
      return;

    const canvas = document.createElement('canvas');

    canvas.width = props.width;
    canvas.height = props.height;
    var context = canvas.getContext("2d");
    var imageData = context.createImageData(props.width, props.height);
    for (let index = 0; index < props.width * props.height; index++) {
      let colorIndex = props.int_mask[index] - 1;
      let color = colorIndex >= 0 ? colorToRGBA(colors[colorIndex % colors.length].background) : [0, 0, 0, 0];
      imageData.data[index * 4 + 0] = color[0]; // red
      imageData.data[index * 4 + 1] = color[1]; // green
      imageData.data[index * 4 + 2] = color[2]; // blue
      imageData.data[index * 4 + 3] = color[3] === 0 ? 0 : 150; // alpha
    }

    context.putImageData(imageData, 0, 0);
    dataUri = canvas.toDataURL();
    overlayRef.current.src = dataUri;
  }

  return <div className={getBlock()}>
    <div className={getElement("image-wrapper")}>
      <img alt={"placeholder"} className={getElement("image")} src={props.img} onLoad={generateOverlayImage} />
      <img ref={overlayRef} className={getElement("overlay")} />
    </div>
  </div>

}
