import {useMemo, useState} from "react";

export function useConfidenceFilters(sections) {
  const [filterCutoff, setFilterCutoff] = useState(20);

  const findMaxProbability = () => {
    const probabilities = sections.map(sect => Math.round(sect.probability * 100));
    const sorted = probabilities.sort((a, b) => b - a);
    return sorted[0];
  }
  const maxProbability = useMemo(findMaxProbability, [filterCutoff, sections.length]);
  const exceedsProbability = (section) => {
    const probability = Math.round(section.probability * 100);

    return probability > filterCutoff;
  }
  return {filterCutoff, setFilterCutoff, maxProbability, exceedsProbability};
}
