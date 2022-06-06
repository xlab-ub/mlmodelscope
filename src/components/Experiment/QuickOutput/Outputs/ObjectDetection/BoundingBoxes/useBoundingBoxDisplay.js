import {ConvertHexToRGB} from "../../_Common/utils/HexConverter";
import ParseProbability from "../../_Common/utils/ParseProbability";

export default function useBoundingBoxDisplay(props) {
  const normalize = (val) => {
    if (val < 0) val = 0;
    if (val > 1) val = 1;

    return val;
  }

  const ymin = normalize(props.ymin);
  const ymax = normalize(props.ymax);
  const xmin = normalize(props.xmin);
  const xmax = normalize(props.xmax);

  let top = ymin * 100;
  let left = xmin * 100;
  let width = (xmax - xmin) * 100
  let height = (ymax - ymin) * 100;
  let color = props.color;
  let rgb = ConvertHexToRGB(color.backgroundColor);
  let label = props.label;

  const isHoveredOn = props.hover.property === props.id;
  const hasHigherConfidence = props.probability * 100 > props.confidence;
  const hasNoHovers = props.hover.property === null;
  const isInCategories = props.labelIsInCategories(props);

  const IsShown = (hasNoHovers && hasHigherConfidence && isInCategories) ||
    (isHoveredOn)
  const LabelIsShown = props.hover.property === props.id || props.hover.labelProp === props.id;

  const pStyle = {
    backgroundColor: color.backgroundColor,
    color: color.fontColor,
    display: LabelIsShown ? "block" : "none",
  }

  const onEnter = () => {
    if (props.hover) props.hover.enter(props.id, {scrollTo: true});
  }
  const onLeave = () => {
    if (props.hover) props.hover.leave();
  }
  const percentage = ParseProbability(props.probability);

  const baseStyle = {
    position: "absolute",
    top: `${top}%`,
    left: `${left}%`,
    width: `${width}%`,
    height: `${height}%`,
    border: `3px solid ${color.backgroundColor}`,
    display: IsShown ? "block" : "none",
    zIndex: LabelIsShown ? 20 : 0,
  }
  return {color, baseStyle, onEnter, onLeave, pStyle, label, percentage, LabelIsShown, rgb}
}
