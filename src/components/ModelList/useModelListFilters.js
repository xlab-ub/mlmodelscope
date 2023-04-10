import {useState} from "react";

export function useModelListFilters(props) {
    const [showFilterMenu, setShowFilterMenu] = useState(false);

    const toggleShowFilterMenu = () => setShowFilterMenu((prev) => !prev);

    const getActiveFilters = () => {
        let [taskFilters, ...restFilters] = props.filterGroups;
        let filters = restFilters;
        if (!props.task)
            filters.push(taskFilters);

        return filters.flatMap(group => group.options.filter(opt => opt.isActive));
    }

    let activeFilters = getActiveFilters();
    return {showFilterMenu, toggleShowFilterMenu, activeFilters};
}