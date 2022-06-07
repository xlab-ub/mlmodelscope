import {BoundingBoxTypes} from "../utils/boundingBoxTypes";
import useToggleableState from "../../../../../../helpers/useTogglableState";

const getDefaultBoundingBoxType = (props) => {
  if (!props.isInstanceSegmentation) return BoundingBoxTypes.default;
  return BoundingBoxTypes.instance_segmentation;
}

export default function useBoundingBoxControl(props) {
  const boundingBoxType = getDefaultBoundingBoxType(props);

  const [hasBoundingBox, toggleBoundingBox] = useToggleableState(true);
  const [hasMask, toggleMask] = useToggleableState(true);
  const [hasContourLines, toggleContourLine] = useToggleableState(true);

  const property = props.boundingBoxProperty ?? "bounding_box";

  return {
    boundingBoxType,
    property,
    hasMask,
    hasBoundingBox,
    toggleBoundingBox,
    toggleMask,
    toggleContourLine,
    hasContourLines
  };
}
