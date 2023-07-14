import { render } from "@testing-library/react";
import ModelDetailPage from "./ModelDetailPage";
import React from "react";
import { image_classification, text } from "../../helpers/TaskIDs";
import { makeTestModel } from "./MakeTestModel";

describe("ModelDetailPage", () => {
  let result;
  let onBackToModelClickedMock;
  let onRunModelClickedMock;

  beforeEach(() => {
    onBackToModelClickedMock = jest.fn();
    onRunModelClickedMock = jest.fn();
  });

  describe("Image Classification", () => {
    beforeEach(() => {
      let testModel = makeTestModel(image_classification);

      result = render(
        <ModelDetailPage
          model={testModel}
          onBackToModelClicked={onBackToModelClickedMock}
          onRunModelClicked={onRunModelClickedMock}
        />
      );
    });

    it("should render without breaking", () => {
      expect(result).toBeDefined();
    });

    it("should render the model name", () => {
      expect(result.getByText("Fakenet22")).toBeInTheDocument();
    });
  });

  describe("Text", () => {
    beforeEach(() => {
      let testModel = makeTestModel(text);

      result = render(
        <ModelDetailPage
          model={testModel}
          onBackToModelClicked={onBackToModelClickedMock}
          onRunModelClicked={onRunModelClickedMock}
        />
      );
    });

    it("should render without breaking", () => {
      expect(result).toBeDefined();
    });

    it("should render the quick text input component", () => {
      let input = result.container.querySelector(".quick-text-input");

      expect(input).toBeDefined();
    });
  });
});
