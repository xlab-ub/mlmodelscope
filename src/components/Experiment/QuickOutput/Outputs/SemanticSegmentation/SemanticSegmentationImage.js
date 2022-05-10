import useBEMNaming from "../../../../../common/useBEMNaming";
import React, {useEffect, useState} from "react";
import {colors, colorToRGBA} from "../_Common/utils/Colors";
import "./SemanticSegmentationImage.scss";


export function SemanticSegmentationImage(props) {
  const {getElement, getBlock} = useBEMNaming("semantic-segmentation-image");
  const [labelX, setlabelX] = useState(0);
  const [labelY, setLabelY] = useState(0);
  const overlayRef = React.createRef();
  let dataUri = null;

  let showLabel = props.hoverNumber !== 0;
  let updatePositions = true;

  const generateOverlayImage = () => {
    let x = 0;
    let y = 0;


    const canvas = document.createElement('canvas');

    canvas.width = props.width;
    canvas.height = props.height;
    var context = canvas.getContext("2d");
    var imageData = context.createImageData(props.width, props.height);
    for (let index = 0; index < props.width * props.height; index++) {
      if (updatePositions) {
        x = index % props.width;
        y = Math.floor(index / props.width);
      }
      let colorIndex = props.int_mask[index] - 1;

      if (showLabel && updatePositions && colorIndex + 1 === props.hoverNumber) {
        updatePositions = false;
        setLabelY(y);
        setlabelX(x);
      }

      let color = colorIndex >= 0 ? colorToRGBA(colors[colorIndex % colors.length].background) : [0, 0, 0, 0];
      imageData.data[index * 4 + 0] = color[0]; // red
      imageData.data[index * 4 + 1] = color[1]; // green
      imageData.data[index * 4 + 2] = color[2]; // blue
      imageData.data[index * 4 + 3] = props.hoverNumber === colorIndex + 1 ? 150 : 0 // alpha
    }

    context.putImageData(imageData, 0, 0);
    dataUri = canvas.toDataURL();
    overlayRef.current.src = dataUri;
  }

  useEffect(() => {
    generateOverlayImage();
  }, [props.hoverNumber])

  const style = {
    position: "absolute",
    top: `${(labelY / props.height) * 100}%`,
    left: `${(labelX / props.width) * 100}%`,
    zIndex: 100,
    backgroundColor: "red",
    color: "white"
  }

  return <div className={getBlock()}>
    <div className={getElement("image-wrapper")}>
      <img alt={"placeholder"} className={getElement("image")} src={props.img} onLoad={generateOverlayImage}/>
      <img ref={overlayRef} className={getElement("overlay")}/>
      <div style={style}>I'm a label!</div>

    </div>
  </div>

}
