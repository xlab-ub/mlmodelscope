import useBEMNaming from "./useBEMNaming";
import React from 'react';
import {shallow} from "enzyme";


describe("useBEMNaming", () => {
  const TestComponent = () => {
    const {getElement, getBlock} = useBEMNaming("test-component", {isActive: true});

    return <div className={getBlock()}>
      <p className={getElement("element")}>Hello World</p>
    </div>
  }

  it("Can set the block name based on the given base name", () => {
    const component = shallow(<TestComponent />);

    const result = component.find("test-component");

    expect(result).not.toBeNull();
  })

  it("Can set the element name based on the given base name with no state", () => {
    const component = shallow(<TestComponent />);

    const result = component.find("test-component-element");

    expect(result).not.toBeNull();
  })
})
