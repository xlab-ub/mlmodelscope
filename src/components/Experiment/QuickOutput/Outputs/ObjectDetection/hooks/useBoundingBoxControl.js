import {useState} from "react";
import {BoundingBoxTypes} from "../utils/boundingBoxTypes";

const getDefaultBoundingBoxType = (props) => {
  if (!props.isInstanceSegmentation) return BoundingBoxTypes.default;
  return BoundingBoxTypes.solid_mask;
}

export default function useBoundingBoxControl(props) {
  const [boundingBoxType, setBoundingBoxType] = useState(getDefaultBoundingBoxType(props));
  const [hasBoundingBox, setHasBoundingBox] = useState(true);
  const [hasMask, setHasMask] = useState(true);
  const [hasContourLines, setHasCountourLines] = useState(true);

  const toggleBoundingBox = () => setHasBoundingBox(!hasBoundingBox);
  const toggleMask = () => setHasMask(!hasMask);
  const toggleContourLine = () => setHasCountourLines(!hasContourLines);

  const switchBoundingBoxTypeMask = () => {
    setBoundingBoxType(boundingBoxType === BoundingBoxTypes.solid_mask ? BoundingBoxTypes.contour_mask : BoundingBoxTypes.solid_mask);
  }

  const property = props.boundingBoxProperty ?? "bounding_box";

  return {
    boundingBoxType,
    switchBoundingBoxTypeMask,
    property,
    hasMask,
    hasBoundingBox,
    toggleBoundingBox,
    toggleMask,
    toggleContourLine,
    hasContourLines
  };
}
