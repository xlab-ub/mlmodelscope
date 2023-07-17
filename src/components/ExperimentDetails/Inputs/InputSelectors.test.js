import { fireEvent, render } from "@testing-library/react";
import InputSelectors from "./InputSelectors";
import React from "react";
import expect from "expect";
import { SampleInputs } from "../../Experiment/QuickInput/Tabs/SampleInput/SampleInputsTab.test";

describe("InputSelectors", () => {
  let result;
  let showDeleteMock;
  let showAddMock;
  let selectMock;

  beforeEach(() => {
    showDeleteMock = jest.fn();
    showAddMock = jest.fn();
    selectMock = jest.fn();

    result = render(
      <InputSelectors
        inputs={SampleInputs}
        showDeleteInputModal={showDeleteMock}
        showAddInputModal={showAddMock}
        handleSelect={selectMock}
        selectedIndex={0}
      />
    );
  });

  it("renders without breaking", () => {
    expect(result).toBeDefined();
  });

  it("renders the correct number of inputs", () => {
    expect(
      result.container.querySelectorAll(".input-selector__input-selector-btn")
        .length
    ).toBe(3);
  });

  it("clicking the first button calls handleSelect callback for the first input", () => {
    let button = result.container.querySelectorAll(
      ".input-selector__input-selector-btn-content"
    )[0];

    expect(button).toBeTruthy();

    fireEvent.click(button);
    expect(selectMock).toHaveBeenCalledWith(SampleInputs[0]);
  });

  it("clicking the delete button calls the onDelete mock", () => {
    let button = result.container.querySelectorAll(
      ".input-selector__input-selector-delete"
    )[0];

    expect(button).toBeTruthy();

    fireEvent.click(button);
    expect(showDeleteMock).toHaveBeenCalledWith(SampleInputs[0]);
  });

  it("clicking the add button calls the onAdd mock", () => {
    let button = result.container.querySelector(
      ".input-selector__add-input-area-btn"
    );

    expect(button).toBeTruthy();

    fireEvent.click(button);
    expect(showAddMock).toHaveBeenCalled();
  });
});
