import {useHoverControl} from "./useHoverControl";
import {useSectionFilters} from "./useSectionFilters";

export default function useObjectDetectionControl(sections) {
  const blockOpacity = useSectionFilters();
  const hover = useHoverControl();
  const sectionFilters = useSectionFilters(sections)

  return {
    hover,
    blockOpacity,
    sectionFilters
  }

}
