import React from 'react';
import {shallow} from "enzyme";
import {useModelListFilters} from "./useModelListFilters";
import {getDefaultGroups} from "./ModelListWithFilters";

describe("useModelListFilters", () => {
    const TestModelListComponent = (props) => {
        const {showFilterMenu, toggleShowFilterMenu, activeFilters} = useModelListFilters(props)

        return (
            <div>
                <button id={"toggle-button"} onClick={toggleShowFilterMenu}>Toggle</button>
                <div id={"show-filter-menu"}>{showFilterMenu.toString()}</div>
                <div id={"active-filters"}>{activeFilters.toString()}</div>
            </div>
        )
    }

    describe("showFilterMenu", () => {
        it("should be false by default", () => {
            const wrapper = shallow(<TestModelListComponent filterGroups={getDefaultGroups()}/>)

            expect(wrapper.find("#show-filter-menu").text()).toEqual("false")
        });

        it("should be able to toggle to true", () => {
            const wrapper = shallow(<TestModelListComponent filterGroups={getDefaultGroups()}/>)

            wrapper.find("#toggle-button").simulate("click")

            expect(wrapper.find("#show-filter-menu").text()).toEqual("true")
        });
    })
})