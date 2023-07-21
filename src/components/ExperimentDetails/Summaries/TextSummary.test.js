import { render } from "@testing-library/react";
import TextSummary from "./TextSummary";
import React from "react";
import { TestTextOutput } from "../../Experiment/QuickOutput/Outputs/Text/testData/testTextOutput";

describe("TextSummary", () => {
  let result;

  beforeEach(() => {
    result = render(<TextSummary trial={TestTextOutput} />);
  });

  it("renders without breaking", () => {
    expect(result.container.querySelector(".text-summary")).toBeInTheDocument();
  });

  it("renders the text output", () => {
    expect(
      result.container.querySelector(".text-summary__output")
    ).toBeInTheDocument();
    expect(
      result.container.querySelector(".text-summary__output").textContent
    ).toBe(TestTextOutput.results.responses[0].features[0].text);
  });
});
