import React from "react";
import { render } from "@testing-library/react";
import InputPreview from "./InputPreview";
import { SampleInputs } from "../../Experiment/QuickInput/Tabs/SampleInput/SampleInputsTab.test";

describe("InputPreview", () => {
  let result;
  let openMock;

  beforeEach(() => {
    openMock = jest.fn();

    result = render(
      <InputPreview
        toggleOpen={openMock}
        selectedInput={SampleInputs[0]}
        isOpen
        selectedIndex={0}
      />
    );
  });

  it("renders without breaking", () => {
    expect(result.container).toBeInTheDocument();
  });

  it("calls the open mock when clicking the button", () => {
    const button = result.container.querySelector("button");
    button.click();
    expect(openMock).toHaveBeenCalled();
  });
});
