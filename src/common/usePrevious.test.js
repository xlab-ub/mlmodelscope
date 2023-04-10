import React, {useState} from 'react';
import {usePrevious} from './usePrevious';
import {shallow} from "enzyme";

function useTestHook() {
    const [value, setValue] = useState('');

    const updateValue = () => setValue(value + 'bob');

    const previousValue = usePrevious(value);

    return {value, updateValue, previousValue};
}

function TestUsePreviousComponent() {
    const {value, updateValue, previousValue} = useTestHook();

    return (
        <div>
            <div data-testid="value">{value}</div>
            <div data-testid="previousValue">{previousValue}</div>
            <button onClick={updateValue}>Update Value</button>
        </div>
    );
}

describe('usePrevious', () => {
    it('initializes previous value to a default value', () => {
        let wrapper = shallow(<TestUsePreviousComponent/>);


        expect(wrapper.find('[data-testid="previousValue"]').text()).toEqual('');
    });
    it('stays on the previous value when value is updated', () => {
        let wrapper = shallow(<TestUsePreviousComponent/>);

        wrapper.find('button').simulate('click');
        expect(wrapper.find('[data-testid="value"]').text()).toEqual('bob');
    });
    it('stays on the previous value when the value is updated twice', () => {
        let wrapper = shallow(<TestUsePreviousComponent/>);

        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');

        expect(wrapper.find('[data-testid="previousValue"]').text()).toEqual('bobbob');
    });
});

