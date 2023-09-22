import { render } from "@testing-library/react";
import React from "react";
import { TestTextToCodeOutput } from "../../Experiment/QuickOutput/Outputs/TextToCode/testData/testTextToCodeOutput";
import TextToCodeSummary from "./TextToCodeSummary";

describe("TextSummary", () => {
  let result;

  beforeEach(() => {
    result = render(<TextToCodeSummary trial={TestTextToCodeOutput} />);
  });

  it("renders without breaking", () => {
    expect(
      result.container.querySelector(".text-to-code-summary")
    ).toBeInTheDocument();
  });
});
