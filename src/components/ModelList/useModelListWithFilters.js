import {useState} from "react";
import {getDefaultGroups} from "./ModelListWithFilters";
import clone from "../../helpers/cloner";
import {FilterGroupNames} from "../../helpers/FilterGroupNames";

export default function useModelListWithFilters(frameworks, models, machines) {
    const [filterGroups, setFilterGroups] = useState(getDefaultGroups(frameworks, machines));
    const [searchText, setSearchText] = useState('');

    const clearFilters = () => {
        setFilterGroups(getDefaultGroups(frameworks, machines));
    };

    const toggleFilterSingle = (filterGroup, target) => {
        let options = filterGroup.options;
        if (!options) {
            return;
        }
        for (let i = 0; i < options.length; i++) {
            if (options[i].name === target) {
                options[i].isActive = !options[i].isActive;
            } else {
                options[i].isActive = false;
            }
        }
        setFilterGroups(clone(filterGroups));
    };

    const toggleFilters = (filterGroupHeader, target) => {
        const newFilterGroups = clone(filterGroups);

        const filterGroup = newFilterGroups.find(group => group.header === filterGroupHeader);

        if (!filterGroup) {
            return;
        }

        const targetOption = filterGroup.options.find(option => option.name === target);
        targetOption.isActive = !targetOption.isActive;

        setFilterGroups(newFilterGroups);
    }

    const updateFilteredModels = () => {
        const getActiveOptions = getActiveOptionsWithHeaders()
        const filteredMatchingModels = models.filter(model => {
            return getActiveOptions.some(option => option.name === filterGroupDataAccessors[option.header](model));
        });

        const filteredModelsBySearchText = filteredMatchingModels.filter(model => {
            return model.name.toLowerCase().includes(searchText.toLowerCase());
        });

        return filteredModelsBySearchText;
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
        if (activeOptionsWithHeaders.length == 0)
            return options;
        else
            return activeOptionsWithHeaders;
    }

    const filterGroupDataAccessors = {
        [FilterGroupNames.frameworks]: (model) => model.framework.name,
        [FilterGroupNames.machines]: (model) => model.framework.architectures[0].name,
        [FilterGroupNames.tasks]: (model) => model.output.type,
    };

    const getDataFromFieldPath = (object, fields) => {
        let result = object;
        for (let i = 0; i < fields.length; i++) {
            result = result[fields[i]];
        }
        return result;
    }

    const updateSearchText = (newSearchText) => {
        setSearchText(newSearchText);
    }

    const filteredModels = updateFilteredModels();

    return {clearFilters, toggleFilters, updateSearchText, filterGroups, filteredModels, searchText};
}