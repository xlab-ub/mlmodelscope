import React, {useMemo} from "react";
import {useCategoryFilters} from "./useCategoryFilters";
import {useConfidenceFilters} from "./useConfidenceFilters";

export function useSectionFilters(sections) {
  const {categories, toggleCategory, labelIsInCategories} = useCategoryFilters(sections);
  const {filterCutoff, setFilterCutoff, maxProbability, exceedsProbability} = useConfidenceFilters(sections);

  const filterFn = (section) => {
    return exceedsProbability(section) && labelIsInCategories(section);
  }

  const filteredSections = useMemo(() => sections.filter(filterFn), [filterCutoff, sections.length, categories.length]);

  return {
    confidenceFilter:
      {
        state: filterCutoff,
        setState: setFilterCutoff,
        maxProbability
      },
    categoryFilter: {
      state: categories,
      toggle: toggleCategory
    },
    filteredSections
  };
}
