import React, {useState} from 'react';
import {shallow} from "enzyme";
import {useSelectedModelBannerControl} from "./UseSelectedModelBannerControl";


describe("useSelectedModelBannerControl", () => {
    function TestSelectedModelBannerControl() {
        const [selectModels, setSelectModels] = useState(false)
        const {open, toggleOpen} = useSelectedModelBannerControl({selectedModels: !selectModels ? [] : [{id: 1}]});

        return (
            <div>
                <button id={"open-toggle"} onClick={toggleOpen}>Toggle</button>
                <div data-testid="open">{open ? "true" : "false"}</div>
                <button id={"select-toggle"} onClick={() => setSelectModels(true)}>Toggle Models</button>
            </div>
        )
    }

    it("should be able to toggle open", () => {
        const wrapper = shallow(<TestSelectedModelBannerControl/>);

        expect(wrapper.find("[data-testid='open']").text()).toEqual("false");
        wrapper.find("#open-toggle").simulate("click");
        expect(wrapper.find("[data-testid='open']").text()).toEqual("true");
    })
})