import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import SampleInputsTab from "./SampleInputsTab";
import { QuickInputType } from "../../quickInputType";

export const SampleInputs = [
  { src: "https://example.com/sample1.jpg", alt: "image 1" },
  { src: "https://example.com/sample2.jpg", alt: "image 2" },
  { src: "https://example.com/sample3.jpg", alt: "image 3" },
];

describe("Sample Inputs Tab", () => {
  describe("Renders an empty input list", () => {
    it("with a title and no sample inputs", () => {
      const wrapper = shallow(<SampleInputsTab />);
      const tab = wrapper.find(".sample-inputs");
      const list = wrapper.find(".sample-inputs").find(".sample-inputs__list");

      expect(tab.length).toBe(1);
      expect(tab.childAt(0).prop("className")).toBe("sample-inputs__title");
      expect(tab.childAt(0).text()).toBe(" to ");
      expect(list.length).toBe(1);
      expect(list.children().length).toBe(0);
    });
  });

  describe("Or a list of sample inputs", () => {
    let wrapper;
    let jestMock;
    beforeEach(() => {
      jestMock = jest.fn();
      wrapper = shallow(
        <SampleInputsTab
          inputSelected={jestMock}
          sampleInputs={SampleInputs}
          type={QuickInputType.Image}
          isUnselected={jestMock}
          isSelected={jestMock}
          selectedIndex={jestMock}
        />
      );
    });

    it("from a provided array of sample inputs", () => {
      const list = wrapper.find(".sample-inputs__list");
      const inputs = list.find(".sample-inputs__input");

      expect(inputs.length).toBe(3);
      expect(inputs.at(0).find("img").prop("src")).toBe(SampleInputs[0].src);
      expect(inputs.at(1).find("img").prop("src")).toBe(SampleInputs[1].src);
      expect(inputs.at(2).find("img").prop("src")).toBe(SampleInputs[2].src);
    });

    it("starting with no input selected", () => {
      expect(wrapper.find(".sample-inputs__input--selected").length).toBe(0);
    });

    it("allowing selection by clicking by clicking the input img", () => {
      const image = wrapper.find(".sample-inputs__input").at(2).find("button");
      image.simulate("click");

      wrapper.update();
      const selected = wrapper.find(".sample-inputs__input--selected");

      expect(selected.length).toBe(1);
      expect(selected.find("img").prop("src")).toBe(SampleInputs[2].src);
    });

    it("only allowing single selection", () => {
      const image = wrapper.find(".sample-inputs__input").at(1).find("button");
      image.simulate("click");
      const selected = wrapper.find(".sample-inputs__input--selected");

      expect(selected.length).toBe(1);
    });

    it("marking the unselected inputs with the correct class", () => {
      const image = wrapper.find(".sample-inputs__input").at(0).find("button");
      image.simulate("click");
      const unselected = wrapper.find(".sample-inputs__input--unselected");

      expect(unselected.length).toBe(2);
      expect(unselected.at(0).find("img").prop("src")).toBe(
        SampleInputs[1].src
      );
      expect(unselected.at(1).find("img").prop("src")).toBe(
        SampleInputs[2].src
      );
    });

    it("calling the inputSelected callback when an input is selected", () => {
      const inputSelected = jest.fn();
      wrapper = shallow(
        <SampleInputsTab
          sampleInputs={SampleInputs}
          inputSelected={inputSelected}
        />
      );
      const image = wrapper.find(".sample-inputs__input").at(1).find("button");
      image.simulate("click");

      expect(inputSelected.mock.calls.length).toBe(1);
      expect(inputSelected.mock.calls[0][0]).toBe(SampleInputs[1].src);
    });
  });
});
