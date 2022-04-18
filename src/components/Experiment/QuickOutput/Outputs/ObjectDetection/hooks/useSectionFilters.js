import {useMemo, useState} from "react";

export function useSectionFilters(sections) {
  const [filterCutoff, setFilterCutoff] = useState(60);

  const filterFn = (section, index, array) => {
    //to-do: set filter algo once object structure is more finalized
    return true;
  }

  const filteredSections = useMemo(() => sections.filter(filterFn), [filterCutoff, sections.length])

  return {state: filterCutoff, setState: setFilterCutoff, filteredSections};
}
