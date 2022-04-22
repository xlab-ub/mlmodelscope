import {useHoverControl} from "../../ObjectDetection/hooks/useHoverControl";
import InstanceSegmentationTrialParser from "../utils/InstanceSegmentationTrialParser";
import {useCategoryFilters} from "../../ObjectDetection/hooks/useCategoryFilters";

export default function useInstanceSegmentationControl(trial) {
  const hover = useHoverControl();

  const coloredSections = new InstanceSegmentationTrialParser(trial).Parse();

  const category = useCategoryFilters(coloredSections, "instance_segment", "label");

  return {
    hover, coloredSections, category: {
      state: category.categories,
      toggle: category.toggleCategory
    }
  };
}
