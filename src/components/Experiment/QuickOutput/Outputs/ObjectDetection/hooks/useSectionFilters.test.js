import {useSectionFilters} from "./useSectionFilters";
import React from "react";
import {TestObjectDetectionResult} from "../testData/TestFeatures";
import {shallow} from "enzyme";
import ObjectDetectionTrialParser from "../utils/ObjectDetectionTrialParser";

describe("useSectionFilters", () => {
  const TestComponent = () => {
    const splitter = new ObjectDetectionTrialParser(TestObjectDetectionResult);
    const sections = splitter.Parse();
    const {filteredSections, categoryFilter, confidenceFilter} = useSectionFilters(sections);

    return <div>
      <button id={"changeConfidenceH"} onClick={() => confidenceFilter.setState(50)}>Toggle Category</button>
      <button id={"changeConfidenceL"} onClick={() => confidenceFilter.setState(10)}>Toggle Category</button>
      <button id={"toggleCat"} onClick={() => categoryFilter.toggle("dog")}>Toggle Category</button>
      <div id={"parent"}>

        {filteredSections.map(section => <p key={section.bounding_box.label}>{section.bounding_box.label}</p>)}
      </div>

    </div>
  }

  it("renders without breaking", () => {
    const result = shallow(<TestComponent/>)

    expect(result).not.toEqual(null);
  })
  it("Can toggle categories off", () => {
    const result = shallow(<TestComponent/>);
    result.find("#toggleCat").simulate("click");

    const parent = result.find("#parent");
    const doesNotHaveDog = parent.text() !== "dog";

    expect(doesNotHaveDog).toBeTruthy();

  })

  it("Can toggle categories back on", () => {
    const result = shallow(<TestComponent/>);
    result.find("#toggleCat").simulate("click");
    result.find("#toggleCat").simulate("click");

    const parent = result.find("#parent");
    const hasDog = parent.text().includes("dog");

    expect(hasDog).toBeTruthy();
  })
  it("Can filter out low confidence items", () => {
    const result = shallow(<TestComponent/>);
    result.find("#changeConfidenceH").simulate("click");

    const parent = result.find("#parent");
    const doesNotHaveDog = parent.text() !== "dog";

    expect(doesNotHaveDog).toBeTruthy();
  })

})
