import React, {useEffect, useState} from "react";
import useBEMNaming from "../../../../../common/useBEMNaming";
import "./ImageEnhancementImage.scss"
import ReactCompareImage from "react-compare-image";

export default function ImageEnhancementImage(props) {
  const {getElement, getBlock} = useBEMNaming("image-enhancement-image");
  const [isTall, setIsTall] = useState(false);

  const getDataUrl = () => `data:image/jpeg;base64,${props.feature.raw_image.jpeg_data}`;

  useEffect(() => {
    let i = new Image();

    i.onload = () => {
      let width = i.width;
      let height = i.height;
      if (height > width) setIsTall(true);
    }

    i.src = getDataUrl();
  }, [props.feature.raw_image.jpeg_data])


  return <div className={getBlock()}>
    <div className={getElement("output-canvas")}>
      <div className={getElement("header-row")}>
        <p className={getElement("header-row-text")}>
          Original
        </p>
        <p className={getElement("header-row-text")}>
          Enhanced
        </p>
      </div>
      <div className={getElement(`wrapper ${isTall && "wrapper-tall"}`)}>
        <ReactCompareImage leftImage={props.input}
                           rightImage={getDataUrl()}

        />
      </div>

    </div>

  </div>
}
