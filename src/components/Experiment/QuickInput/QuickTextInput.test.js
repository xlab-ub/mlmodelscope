import React from "react";
import { fireEvent, render } from "@testing-library/react";
import QuickTextInput from "./QuickTextInput";
import Task from "../../../helpers/Task";
import { image_classification } from "../../../helpers/TaskIDs";
import { makeTestModel } from "../../ModelDetailPage/MakeTestModel";

describe("QuickTextInput", () => {
  let result;
  let submitMock;

  beforeEach(() => {
    submitMock = jest.fn();

    result = render(
      <QuickTextInput
        onSubmit={submitMock}
        model={makeTestModel(image_classification)}
      />
    );
  });

  it("should render without breaking", () => {
    expect(result).toBeDefined();
  });

  it("contains a root element with the class name 'quick-text-input'", () => {
    const { container } = result;
    const rootElement = container.firstChild;
    expect(rootElement).toHaveClass("quick-text-input");
  });

  it("contains a heading for the input", () => {
    const { getByText } = result;
    expect(getByText("Try this model")).toBeInTheDocument();
  });

  it("contains a subheading for the given task of the input", () => {
    const { getByText } = result;

    expect(getByText(Task.image_classification.inputText)).toBeInTheDocument();
  });

  it("contains help text for what to enter for the input", () => {
    const { container } = result;

    const helpText = container.querySelector(".quick-text-input__help-text");

    expect(helpText).toBeInTheDocument();
  });

  it("contains a text input", () => {
    const { container } = result;

    const input = container.querySelector(".quick-text-input__input");

    expect(input).toBeInTheDocument();
  });

  it("can change the text input", () => {
    const { container } = result;

    const input = container.querySelector(".quick-text-input__input");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  it("has a submit button", () => {
    const { container } = result;

    const submitButton = container.querySelector(
      ".quick-text-input__submit-button"
    );

    expect(submitButton).toBeInTheDocument();
  });

  it("clicking the submit button calls the onSubmit prop", () => {
    const { container } = result;

    const input = container.querySelector(".quick-text-input__input");

    fireEvent.change(input, { target: { value: "test" } });
    const submitButton = container.querySelector(
      ".quick-text-input__submit-button"
    );

    fireEvent.click(submitButton);

    expect(submitMock).toHaveBeenCalled();
  });

  it("submitting passes along the current text value", () => {
    const { container } = result;

    const input = container.querySelector(".quick-text-input__input");

    fireEvent.change(input, { target: { value: "test" } });

    const submitButton = container.querySelector(
      ".quick-text-input__submit-button"
    );

    fireEvent.click(submitButton);

    expect(submitMock).toHaveBeenCalledWith("test");
  });

  it("can give the input a default value", () => {
    const { container } = render(
      <QuickTextInput
        onSubmit={submitMock}
        model={makeTestModel(image_classification)}
        defaultValue="test"
      />
    );

    const input = container.querySelector(".quick-text-input__input");

    expect(input.value).toBe("test");
  });

  it("the submit button is disabled when the textbox is empty", () => {
    const { container } = result;

    const submitButton = container.querySelector(
      ".quick-text-input__submit-button"
    );

    expect(submitButton).toBeDisabled();
  });

  it("the submit button is enabled once the textbox is not empty", () => {
    const { container } = result;

    const input = container.querySelector(".quick-text-input__input");

    fireEvent.change(input, { target: { value: "test" } });

    const submitButton = container.querySelector(
      ".quick-text-input__submit-button"
    );

    expect(submitButton).not.toBeDisabled();
  });
});
