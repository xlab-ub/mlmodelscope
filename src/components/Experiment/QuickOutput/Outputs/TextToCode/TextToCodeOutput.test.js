import { render } from "@testing-library/react";

import React from "react";
import TextToCodeOutput from "./TextToCodeOutput";
import { TestTextToCodeOutput } from "./testData/testTextToCodeOutput";

describe("TextToCodeOutput", () => {
  let result;
  let mockOnSubmit;

  beforeEach(() => {
    mockOnSubmit = jest.fn();

    result = render(<TextToCodeOutput trial={TestTextToCodeOutput} />);
  });

  it("renders without breaking", () => {
    expect(result).toBeDefined();
  });

  it("contains a root element with class 'text-to-code-output'", () => {
    const { container } = result;
    const root = container.firstChild;
    expect(root).toHaveClass("text-to-code-output");
  });

  it("contains an output title", () => {
    const { getByText } = result;
    const title = getByText("Output");
    expect(title).toBeInTheDocument();
  });

  it("contains an output duration", () => {
    const { container } = result;
    const duration = container.querySelector(".output-duration");
    expect(duration).toBeInTheDocument();
  });

  it("the output duration has the correct value", () => {
    const { container } = result;
    const duration = container.querySelector(".output-duration");
    expect(duration).toHaveTextContent("9.2s");
  });

  it("contains a container for the output code", () => {
    const { container } = result;
    const codeContainer = container.querySelector(
      ".text-to-code-output__output-container"
    );
    expect(codeContainer).toBeInTheDocument();
  });

  it("contains a rating component", () => {
    const { container } = result;
    const rating = container.querySelector(".rating");
    expect(rating).toBeInTheDocument();
  });
});
