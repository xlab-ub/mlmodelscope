import {useModelListUI} from "./useModelListUI";
import {shallow} from "enzyme";
import ExperimentDetailHeader from "../ExperimentDetails/ExperimentDetailHeader";
import React from 'react';
import ModelHeader from "./ModelHeader";
import SelectedModelsBanner from "./SelectedModelsBanner";

describe("useModelListUI", () => {
    const ModelUITestComponent = (props) => {
        const {makePageHeader, makeSelectedModelsBanner} = useModelListUI(props)
        return (
            <div>
                <div data-testid="pageHeader">{makePageHeader()}</div>
                <div data-testid="selectedModels">{makeSelectedModelsBanner()}</div>
            </div>
        )
    }

    describe("pageHeader", () => {
        it("should render the experimentDetailHeader when props.add is true", () => {
            const wrapper = shallow(<ModelUITestComponent add/>)
            expect(wrapper.find(ExperimentDetailHeader).exists()).toBe(true);
        })
        it("should render a ModelHeader when props.add is false", () => {
            const wrapper = shallow(<ModelUITestComponent add={false}/>)
            expect(wrapper.find(ModelHeader).exists()).toBe(true);
        })
    })
    describe("makeSelectedModelsBanner", () => {
        it("should render the selectedModelsBanner when props.add is true", () => {
            const wrapper = shallow(<ModelUITestComponent add/>)
            expect(wrapper.find(SelectedModelsBanner).exists()).toBe(true);
        })
        it("should not render the selectedModelsBanner when props.add is not true", () => {
            const wrapper = shallow(<ModelUITestComponent/>)
            expect(wrapper.find(SelectedModelsBanner).exists()).toBe(false);
        })
    })
})