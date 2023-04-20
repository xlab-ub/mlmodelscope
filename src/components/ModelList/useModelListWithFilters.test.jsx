import expect from "expect";
import React from 'react';
import {image_classification, object_detection} from "../../helpers/TaskIDs";
import {act, renderHook} from "@testing-library/react-hooks";
import useModelListWithFilters, {SortDirection} from "./useModelListWithFilters";
import {FilterGroupNames} from "../../helpers/FilterGroupNames";
import {defaultFrameworks, defaultMachines, defaultModels} from "./TestData";


describe('The Model List Filters', () => {
    let result;

    const testSelectedModels = [defaultModels[0]];

    beforeEach(() => {
        result = renderHook(() => useModelListWithFilters(defaultFrameworks, defaultModels, defaultMachines, [])).result;
    });

    afterEach(() => {
        Object.defineProperty(window, 'location', {
            value: {
                search: "",
            },
        });
    });

    it("clearFilters clears all filters", () => {
        act(() => {
            result.current.toggleFilter(FilterGroupNames.tasks, image_classification);
        })

        act(() => {
            result.current.clearFilters();
        })

        let filters = result.current.filterGroups.filter(group => group.options.filter(opt => opt.isActive).length > 0);
        const afterFilterLength = filters.length;

        expect(afterFilterLength).toEqual(0);
    });

    it('creates framework options for filter group', () => {
        let frameworkFilterGroup = result.current.filterGroups.find(group => group.header === "Frameworks");
        expect(frameworkFilterGroup.options).toEqual(defaultFrameworks);
    });

    it('can filter by framework', () => {
        act(() => {
            result.current.toggleFilter(FilterGroupNames.frameworks, "PyTorch");
        })
        let filteredModels = result.current.filteredModels;
        expect(filteredModels.length).toEqual(1);
        expect(filteredModels[0]).toEqual(defaultModels[1]);
    });

    it('can filter by task', () => {
        act(() => {
            result.current.toggleFilter(FilterGroupNames.tasks, object_detection);
        });

        let filteredModels = result.current.filteredModels;
        expect(filteredModels.length).toEqual(1);
        expect(filteredModels[0]).toEqual(defaultModels[2]);
    });

    it('can search', () => {
        act(() => {
            result.current.updateSearchText("ChICKeN");
        });

        let filteredModels = result.current.filteredModels;
        expect(filteredModels.length).toEqual(1);
        expect(filteredModels[0]).toEqual(defaultModels[0]);
    });

    it('can combine filters', () => {
        act(() => {
            result.current.toggleFilter("Frameworks", "Onnxruntime");
        })

        act(() => {
            result.current.toggleFilter("Tasks", image_classification);
        })

        act(() => {
            result.current.updateSearchText("tigershark");
        })

        let filteredModels = result.current.filteredModels;
        expect(result.current.searchText).toEqual("tigershark");
        expect(filteredModels.length).toEqual(1);
        expect(filteredModels[0]).toEqual(defaultModels[4]);
    });

    it('sorts the results', () => {
        let filteredModels = result.current.filteredModels;

        expect(filteredModels).toEqual([defaultModels[2], defaultModels[0], defaultModels[6], defaultModels[4], defaultModels[5], defaultModels[3], defaultModels[1]]);
    });

    it('can sort in reverse order', () => {
        act(() => {
            result.current.setSortDirection(SortDirection.DESC);
        });

        let filteredModels = result.current.filteredModels;

        expect(filteredModels).toEqual([defaultModels[1], defaultModels[3], defaultModels[5], defaultModels[4], defaultModels[6], defaultModels[0], defaultModels[2]]);
    });

    it('can filter by first machine', () => {
        act(() => {
            result.current.toggleFilter(FilterGroupNames.machines, "ILLIAC");
        });

        let filteredModels = result.current.filteredModels;
        expect(filteredModels.length).toEqual(1);
        expect(filteredModels[0]).toEqual(defaultModels[3]);
    });


    it("defaults filtering to a task in the query string", () => {
        const model = defaultModels[0];
        const task = model.output.type;
        const query = `?task=${task}`;
        window.location.search = query;

        result = renderHook(() => useModelListWithFilters(defaultFrameworks, defaultModels, defaultMachines, [])).result;

        const options = result.current.filterGroups[0].options;

        expect(options.find(option => option.name === task).isActive).toEqual(true);
    });

    it("defaults filtering to a framework in the query string", () => {
        const model = defaultModels[0];
        const framework = model.framework.name;
        const query = `?framework=${framework}`;
        window.location.search = query;

        result = renderHook(() => useModelListWithFilters(defaultFrameworks, defaultModels, defaultMachines, [])).result;

        const options = result.current.filterGroups[1].options;

        expect(options.find(option => option.name === framework).isActive).toEqual(true);
    });

    it("defaults filtering to a machine in the query string", () => {
        const model = defaultModels[0];
        const machine = model.framework.architectures[0].name;
        const query = `?machine=${machine}`;
        window.location.search = query;

        result = renderHook(() => useModelListWithFilters(defaultFrameworks, defaultModels, defaultMachines, [])).result;

        const options = result.current.filterGroups[2].options;

        expect(options.find(option => option.name === machine).isActive).toEqual(true);
    });

    it("defaults search text to what is in the query string", () => {
        const searchText = "chicken";
        const query = `?search=${searchText}`;
        window.location.search = query;

        result = renderHook(() => useModelListWithFilters(defaultFrameworks, defaultModels, defaultMachines, [])).result;

        expect(result.current.searchText).toEqual(searchText);
    });

    it("deselects other filters in the group when selecting a new filter", () => {
        act(() => {
            result.current.toggleFilter(FilterGroupNames.tasks, image_classification);
        })

        act(() => {
            result.current.toggleFilter(FilterGroupNames.tasks, object_detection);
        })

        let taskFilterOptions = result.current.filterGroups[0].options;

        expect(taskFilterOptions.find(option => option.name === image_classification).isActive).toEqual(false);
    })

    it("deselects a filter when it is toggled twice", () => {
        act(() => {
            result.current.toggleFilter(FilterGroupNames.tasks, image_classification);
        })

        act(() => {
            result.current.toggleFilter(FilterGroupNames.tasks, image_classification);
        })

        let taskFilterOptions = result.current.filterGroups[0].options;

        expect(taskFilterOptions.find(option => option.name === image_classification).isActive).toEqual(false);
    })
});
