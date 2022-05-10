import {useHoverControl} from "../../_Common/hooks/useHoverControl";
import {useSectionFilters} from "./useSectionFilters";
import React from 'react';
import ObjectDetectionTrialParser from "../utils/ObjectDetectionTrialParser";

export default function useObjectDetectionControl(trial) {
  const hover = useHoverControl();

  const splitter = new ObjectDetectionTrialParser(trial);
  const coloredSections = splitter.Parse();

  const {filteredSections, confidenceFilter, categoryFilter, labelIsInCategories} = useSectionFilters(coloredSections)

  return {
    hover,
    filter: {confidence: confidenceFilter, category: categoryFilter, labelIsInCategories},
    filteredSections,
    sections: coloredSections
  }
}
