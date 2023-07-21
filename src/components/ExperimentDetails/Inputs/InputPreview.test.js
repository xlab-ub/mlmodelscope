import React from "react";
import { fireEvent, render } from "@testing-library/react";
import InputPreview from "./InputPreview";
import { SampleInputs } from "../../Experiment/QuickInput/Tabs/SampleInput/SampleInputsTab.test";
import Task from "../../../helpers/Task";

describe("InputPreview", () => {
  let result;
  let openMock;

  describe("Image Input Type", () => {
    beforeEach(() => {
      openMock = jest.fn();

      result = render(
        <InputPreview
          toggleOpen={openMock}
          selectedInput={SampleInputs[0]}
          isOpen
          selectedIndex={0}
          task={Task.image_classification}
        />
      );
    });

    it("renders the correct component", () => {
      expect(result.container).toBeInTheDocument();
      expect(result.container.querySelector("img")).toBeInTheDocument();
    });

    it("calls the open mock when clicking the button", () => {
      const button = result.container.querySelector("button");
      button.click();
      expect(openMock).toHaveBeenCalled();
    });
  });

  describe("Text Input Type", () => {
    beforeEach(() => {
      openMock = jest.fn();

      result = render(
        <InputPreview
          toggleOpen={openMock}
          selectedInput={"Text input"}
          isOpen
          selectedIndex={1}
          task={Task.text}
        />
      );
    });

    it("renders the correct component", () => {
      expect(result.container.querySelector("img")).not.toBeInTheDocument();
    });

    it("calls the open mock when clicking the button", () => {
      const button = result.getByRole("button");

      fireEvent.click(button);

      expect(openMock).toHaveBeenCalled();
    });

    it("renders the selected input's text", () => {
      expect(
        result.container.querySelector(".input-preview__selection-btn")
          .textContent
      ).toEqual("Text input");
    });

    it("cuts off the input preview if the text is too long", () => {
      const longText = "This is a very long text input that should be cut off";
      result.rerender(
        <InputPreview
          toggleOpen={openMock}
          selectedInput={longText}
          isOpen
          selectedIndex={1}
          task={Task.text}
        />
      );
      expect(
        result.container.querySelector(".input-preview__selection-btn")
          .textContent
      ).toEqual("This is a very long text input...");
    });
  });
});
