import ObjectDetectionTrialParser from "./ObjectDetectionTrialParser";
import {TestObjectDetectionResult} from "../testData/TestFeatures";

describe("ObjectDetectionTrialParser", () => {
  it("Works without breaking with demo input", () => {
    const parser = new ObjectDetectionTrialParser(TestObjectDetectionResult);
    const result = parser.Parse();

    expect(Array.isArray(result)).toBeTruthy();
  })
  it("Each value has a color object", () => {
    const parser = new ObjectDetectionTrialParser(TestObjectDetectionResult);
    const result = parser.Parse();

    result.forEach(value => {
      expect(value.color).toBeTruthy();
    })
  })
})
