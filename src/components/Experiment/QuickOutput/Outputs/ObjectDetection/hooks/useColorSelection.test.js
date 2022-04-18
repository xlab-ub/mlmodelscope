import React from "react";
import useColorSelection from "./useColorSelection";
import {shallow} from "enzyme";

describe("useColorSelection", () => {
  const TestComponent = ({length}) => {
    const sections = new Array(length).fill({prop: "Hello World"});

    const coloredSections = useColorSelection(sections);

    return <div>
      {coloredSections.map(section => <div key={section.color.className} className={section.color.className + " test"}>
        {section.color.backgroundColor}
      </div>)}
    </div>
  }

  it("renders without breaking", () => {
    const result = shallow(<TestComponent length={10}/>)

    expect(result).not.toBeNull();
  })

  it("Each rendered color is unique (small section list)", () => {
    let classes = [];
    const result = shallow(<TestComponent length={5}/>);

    const found = result.find(".test");

    found.forEach((node) => {
      const className = node.prop("className");

      expect(classes.includes(className)).toEqual(false);
      classes.push(className);
    })
  })

  it("Each rendered color is unique (large section list)", () => {
    let classes = [];
    const result = shallow(<TestComponent length={5000}/>);

    const found = result.find(".test");

    found.forEach((node) => {
      const className = node.prop("className");

      expect(classes.includes(className)).toEqual(false);
      classes.push(className);
    })
  })
})
