import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import BEMComponent from "./BEMComponent";

describe('BEM Component', () => {
  class TestComponentX extends BEMComponent {
    constructor(props) {
      super(props);

      this.state = {
        selected: false,
        selectedIndex: undefined
      }
    }

    setSelected() {
      this.setState({
        selected: true
      });
    }

    selectIndex(index) {
      this.setState({
        selectedIndex: index
      });
    }

    render() {
      return <div>test</div>
    }
  }
  let testComponent;

  const modifiers = {
    selectable: {
      selected: (state) => state.selected === true
    },
    indexable: {
      checked: (state, extra) => state.selectedIndex === extra
    }
  }

  beforeEach(() => {
    testComponent = shallow(<TestComponentX />);
    testComponent.instance().modifiers = modifiers;
  });

  it('sets the block name based on class name', () => {
    expect(testComponent.instance().block()).toBe('test-component-x');
  });

  it('allows overriding the block name with className prop', () => {
    testComponent = shallow(<TestComponentX className="test-component-y" />);

    expect(testComponent.instance().block()).toBe('test-component-y');
  });

  it('generates a proper element class', () => {
    expect(testComponent.instance().element('element')).toBe('test-component-x__element');
  });

  it('does not include a modifier for an element with an unmet condition', () => {
    expect(testComponent.instance().element('selectable')).toBe('test-component-x__selectable');
  });

  it('will include a modifier class for an element', () => {
    testComponent.instance().setSelected();

    expect(testComponent.instance().element('selectable')).toBe('test-component-x__selectable test-component-x__selectable--selected');
  });

  it('will include a modifier class for an element based on additional data', () => {
    testComponent.instance().selectIndex(1);

    expect(testComponent.instance().element('indexable', 1)).toBe('test-component-x__indexable test-component-x__indexable--checked')
  });
});
