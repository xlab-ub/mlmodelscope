import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { TestTextOutput } from "./testData/testTextOutput";
import TextOutput from "./TextOutput";

describe("TextOutput", () => {
  let result;
  let mockOnSubmit;

  beforeEach(() => {
    mockOnSubmit = jest.fn();

    result = render(
      <TextOutput onSubmit={mockOnSubmit} trial={TestTextOutput} />
    );
  });

  it("renders without breaking", () => {
    expect(result).toBeDefined();
  });

  it("contains a root element with class 'text-output'", () => {
    const { container } = result;
    const root = container.firstChild;
    expect(root).toHaveClass("text-output");
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

  it("contains a container for the output text", () => {
    const { container } = result;
    const textContainer = container.querySelector(
      ".text-output__output-container"
    );
    expect(textContainer).toBeInTheDocument();
  });

  it("contains the correct output text", () => {
    const { container } = result;
    const textContainer = container.querySelector(
      ".text-output__output-container-text"
    );
    expect(textContainer).toHaveTextContent(
      "Luigi sagte mir oft, er wollte nie, dass die Brüder vor"
    );
  });

  it("contains a rating component", () => {
    const { container } = result;
    const rating = container.querySelector(".rating");
    expect(rating).toBeInTheDocument();
  });

  it("contains a section title for the input", () => {
    const { getByText } = result;
    const title = getByText("Input Text");
    expect(title).toBeInTheDocument();
  });

  it("contains an input box for the input text", () => {
    const { container } = result;
    const input = container.querySelector(".text-output__input-container-text");
    expect(input).toBeInTheDocument();
  });

  it("the input box by default contains the correct input text", () => {
    const { container } = result;
    const input = container.querySelector(".text-output__input-container-text");
    expect(input).toHaveValue(
      'translate English to German: "Luigi often said to me that he never wanted the brothers to end up in court," she wrote.'
    );
  });

  it("can update the input text", () => {
    const { container } = result;
    const input = container.querySelector(".text-output__input-container-text");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input).toHaveValue("test");
  });

  it("contains a submit button to submit the input text", () => {
    const { container } = result;
    const button = container.querySelector(".text-output__input-submit-button");
    expect(button).toBeInTheDocument();
  });

  it("calls mockOnSubmit when clicking the submit button", () => {
    const { container } = result;
    const button = container.querySelector(".text-output__input-submit-button");
    fireEvent.click(button);
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it("passes the current input text to mockOnSubmit when clicking the submit button", () => {
    const { container } = result;

    const text = container.querySelector(".text-output__input-container-text");
    fireEvent.change(text, { target: { value: "test" } });

    const button = container.querySelector(".text-output__input-submit-button");
    fireEvent.click(button);
    expect(mockOnSubmit).toHaveBeenCalledWith("test");
  });
});
