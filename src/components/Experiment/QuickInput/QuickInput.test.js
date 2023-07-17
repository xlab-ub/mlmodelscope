import React from "react";
import QuickInput from "./QuickInput";
import { render } from "@testing-library/react";
import {
  image_classification,
  image_enhancement,
  instance_segmentation,
  object_detection,
  semantic_segmentation,
  text,
} from "../../../helpers/TaskIDs";
import { SampleInputs } from "./Tabs/SampleInput/SampleInputsTab.test";

describe("QuickInput", () => {
  let result;
  let runModelClickedMock;

  const makeModel = (type = image_classification) => ({
    output: { type: type },
  });

  const renderModel = (model) => {
    result = render(
      <QuickInput
        model={model}
        sampleInputs={SampleInputs}
        onRunModelClicked={runModelClickedMock}
      />
    );
  };

  beforeEach(() => {
    runModelClickedMock = jest.fn();
  });

  beforeAll(() => {
    Object.defineProperty(global.Image.prototype, "src", {
      // Define the property setter
      set(src) {
        if (src === LOAD_SRC) {
          setTimeout(() => this.onload());
        } else {
          setTimeout(() => this.onerror(new Error("mocked error")));
        }
      },
    });
  });

  describe("Image Input Type", () => {
    beforeEach(() => {
      result = render(
        <QuickInput
          model={makeModel()}
          sampleInputs={SampleInputs}
          onRunModelClicked={runModelClickedMock}
        />
      );
    });
    it("renders without breaking", () => {
      expect(result.container).toBeTruthy();
    });

    it.each([
      image_classification,
      object_detection,
      semantic_segmentation,
      image_enhancement,
      instance_segmentation,
      "invalid type",
    ])("renders the image input style for type %s", (type) => {
      renderModel(makeModel(type));

      expect(result.container.querySelector(".quick-image-input")).toBeTruthy();
    });
  });

  describe("Text Input Type", () => {
    it.each([text])("renders the correct input type for type %s", (type) => {
      renderModel(makeModel(type));

      expect(result.container.querySelector(".quick-text-input")).toBeTruthy();
    });
  });
});
