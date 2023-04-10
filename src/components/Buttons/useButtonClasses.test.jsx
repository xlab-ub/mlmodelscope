import React from 'react';
import useButtonClasses from "./useButtonClasses";
import {shallow} from "enzyme";

describe("useButtonClasses", () => {
    const ButtonTestComponent = (props) => {
        const {
            generateBlockName,
            generateClassName,
            generateIcon,
        } = useButtonClasses(props);

        return <div>
            <div id={'blockTest'}>{generateBlockName()}</div>
            <div id={'classTest'}>{generateClassName('test')}</div>
            <div id={'iconText'}>{generateIcon(props)}</div>
        </div>
    }

    describe('generateBlockName()', () => {
        it('without props returns a secondary button', () => {
            const wrapper = shallow(<ButtonTestComponent/>);
            expect(wrapper.find('#blockTest').text()).toEqual('secondary-button');
        });

        it('can return a primary button', () => {
            const wrapper = shallow(<ButtonTestComponent isPrimary/>);
            expect(wrapper.find('#blockTest').text()).toEqual('primary-button');
        });

        it('can return a small primary button', () => {
            const wrapper = shallow(<ButtonTestComponent isSmall isPrimary/>);
            expect(wrapper.find('#blockTest').text()).toEqual('small-button primary-button');
        });

        it('can return a small secondary button', () => {
            const wrapper = shallow(<ButtonTestComponent isSmall/>);
            expect(wrapper.find('#blockTest').text()).toEqual('small-button secondary-button');
        });
    });

    describe("generateClassName", () => {
        it('without props returns a secondary button', () => {
            const wrapper = shallow(<ButtonTestComponent/>);
            expect(wrapper.find('#classTest').text()).toEqual('secondary-button__test');
        });

        it('can return a primary button', () => {
            const wrapper = shallow(<ButtonTestComponent isPrimary/>);
            expect(wrapper.find('#classTest').text()).toEqual('primary-button__test');
        });

        it('can return a small primary button', () => {
            const wrapper = shallow(<ButtonTestComponent isSmall isPrimary/>);
            expect(wrapper.find('#classTest').text()).toEqual('small-button__test primary-button__test');
        });

        it('can return a small secondary button', () => {
            const wrapper = shallow(<ButtonTestComponent isSmall/>);
            expect(wrapper.find('#classTest').text()).toEqual('small-button__test secondary-button__test');
        });
    });

    describe('generateIcon', () => {
        it('can generate a right arrow icon', () => {
            const wrapper = shallow(<ButtonTestComponent/>);
            expect(wrapper.find("[data-testid='icon-arrow']").exists()).toEqual(true);
        });

        it('can return a plus icon', () => {
            const wrapper = shallow(<ButtonTestComponent icon="plus"/>);
            expect(wrapper.find("[data-testid='icon-plus']").exists()).toEqual(true);
        });

        it('can return a minus icon', () => {
            const wrapper = shallow(<ButtonTestComponent icon="minus"/>);
            expect(wrapper.find("[data-testid='icon-minus']").exists()).toEqual(true);
        });
    })
});
