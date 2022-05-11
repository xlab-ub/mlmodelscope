import useBEMNaming from "../../../../../common/useBEMNaming";
import React, {useEffect, useState} from "react";
import {colors, colorToRGBA} from "../_Common/utils/Colors";
import "./SemanticSegmentationImage.scss";


export function SemanticSegmentationImage(props) {
  const {getElement, getBlock} = useBEMNaming("semantic-segmentation-image");
  const [labelX, setLabelX] = useState(0);
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

      if (showLabel && updatePositions && colorIndex + 1 === props.hover.property) {
        updatePositions = false;
        setLabelY(y);
        setLabelX(x);
      }

      const isShownByHover = !props.hover.property || props.hover.property === colorIndex + 1;
      const isShownByCategories = true;
      const colorIsNotZero = colorIndex !== -1;

      const isShown = isShownByHover && isShownByCategories && colorIsNotZero;

      let color = colorIndex >= 0 ? colorToRGBA(colors[colorIndex % colors.length].background) : [0, 0, 0, 0];
      imageData.data[index * 4 + 0] = color[0]; // red
      imageData.data[index * 4 + 1] = color[1]; // green
      imageData.data[index * 4 + 2] = color[2]; // blue
      imageData.data[index * 4 + 3] = isShown ? 150 : 0 // alpha
    }

    context.putImageData(imageData, 0, 0);
    dataUri = canvas.toDataURL();
    overlayRef.current.src = dataUri;
  }

  useEffect(() => {
    generateOverlayImage();
  }, [props.hover.property])

  let color = props.hover.property !== null ? colors[(props.hover.property - 1) % colors.length] : colors[0];
  const style = {
    top: `${(labelY / props.height) * 100}%`,
    left: `${(labelX / props.width) * 100}%`,
    backgroundColor: color.background,
    color: color.font,
  }


  return <div className={getBlock()}>
    <div className={getElement("image-wrapper")}>
      <img alt={"placeholder"} className={getElement("image")} src={props.img} onLoad={generateOverlayImage}/>
      <img ref={overlayRef} className={getElement("overlay")}/>
      {props.hover.property &&
        <div className={getElement("label")} style={style}>{props.labelToShow}</div>
      }
    </div>
  </div>

}
