import {useEffect, useState} from "react";
import {getDefaultGroups} from "./ModelListWithFilters";
import clone from "../../helpers/cloner";
import {FilterGroupNames} from "../../helpers/FilterGroupNames";
import {getSearchParametersFromQueryString} from "../../helpers/QueryParsers";

export const SortDirection = {
    ASC: 'ASC',
    DESC: 'DESC',
};

export default function useModelListWithFilters(frameworks, models, machines, selectedModels) {
    const [filterGroups, setFilterGroups] = useState(getDefaultGroups(frameworks, machines));
    const [sortDirection, setSortDirection] = useState(SortDirection.ASC);

    const [searchText, setSearchText] = useState(getSearchParametersFromQueryString(window.location.search) || '');

    const clearFilters = () => {
        setFilterGroups(getDefaultGroups(frameworks, machines));
    };

    const toggleFilter = (filterGroupHeader, target) => {
        const newFilterGroups = clone(filterGroups);
        const filterGroup = newFilterGroups.find(group => group.header === filterGroupHeader);

        if (!filterGroup) {
            return;
        }

        filterGroup.options.forEach(option => option.isActive = option.name === target ? !option.isActive : false);
        setFilterGroups(newFilterGroups);
    }

    function sortOptionsByState(filteredModelsBySearchText) {
        const isSortingByAscending = sortDirection === SortDirection.ASC;

        return filteredModelsBySearchText
            .sort((a, b) => isSortingByAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    }

    const updateFilteredModels = () => {
        const getActiveOptions = getActiveOptionsWithHeaders()
        const filteredMatchingModels = models.filter(model => {
            return getActiveOptions.every(option => option.name === filterGroupDataAccessors[option.header](model));
        });

        const filteredModelsBySearchText = filteredMatchingModels.filter(model => {
            return model.name.toLowerCase().includes(searchText.toLowerCase())
                || model.description.toLowerCase().includes(searchText.toLowerCase());
        });

        return sortOptionsByState(filteredModelsBySearchText);
    }

    const getActiveOptionsWithHeaders = () => {
        const options = filterGroups.reduce((acc, group) => {
            const allOptions = group.options;
            const activeOptionsWithHeader = allOptions.map(option => {
                return {header: group.header, name: option.name, isActive: option.isActive};
            });
            return [...acc, ...activeOptionsWithHeader];
        }, []);

        const activeOptionsWithHeaders = options.filter(option => option.isActive);

        return activeOptionsWithHeaders;
    }

    const filterGroupDataAccessors = {
        [FilterGroupNames.frameworks]: (model) => model.framework.name,
        [FilterGroupNames.machines]: (model) => model.framework.architectures[0].name,
        [FilterGroupNames.tasks]: (model) => model.output.type,
    };

    const updateSearchText = (newSearchText) => {
        setSearchText(newSearchText);
    }

    const filteredModels = updateFilteredModels();

    useEffect(() => {
        setFilterGroups(getDefaultGroups(frameworks, machines));
    }, [frameworks.length, frameworks.length])

    return {
        clearFilters,
        toggleFilter,
        updateSearchText,
        filterGroups,
        filteredModels,
        searchText,
        setSortDirection,
        sortDirection
    };
}