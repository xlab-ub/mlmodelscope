import NoInputs from "./NoInputs";
import { render } from "@testing-library/react";
import React from "react";

describe("NoInputs", () => {
  let result;
  let showAddInputMock;

  beforeEach(() => {
    showAddInputMock = jest.fn();

    result = render(<NoInputs showAddInputModal={showAddInputMock} />);
  });

  it("should render without breaking", () => {
    expect(result).toBeDefined();
    expect(result.container.querySelector(".no-inputs")).toBeTruthy();
  });

  it("clicking the button calls the show add modal prop", () => {
    const button = result.container.querySelector(".no-inputs__button");
    button.click();
    expect(showAddInputMock).toHaveBeenCalled();
  });
});
