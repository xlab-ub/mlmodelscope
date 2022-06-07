import InstanceSegmentationTrialParser from "./InstanceSegmentationTrialParser";
import {TestInstanceSegmentationOutput} from "../testData/TestFeatures";
import clone from "../../../../../../helpers/cloner";

describe("InstanceSegmentationTrialParser", () => {
  it("can run through test data without breaking", () => {
    let result = new InstanceSegmentationTrialParser(TestInstanceSegmentationOutput).Parse();
    expect(result).not.toBeNull();
  })
  it("filters out invalid undefined bounding box coordinates", () => {
    let copy = clone(TestInstanceSegmentationOutput);
    copy.results.responses[0].features[0].instance_segment.xmax = undefined;

    copy.results.responses[0].features[1].instance_segment.label = "chicken";

    let result = new InstanceSegmentationTrialParser(copy).Parse();

    expect(result[0].instance_segment.label).toEqual("chicken");
  })
  it("filters out too low probability", () => {
    let copy = clone(TestInstanceSegmentationOutput);
    copy.results.responses[0].features[0].probability = 0.00005;

    copy.results.responses[0].features[1].instance_segment.label = "chicken";

    let result = new InstanceSegmentationTrialParser(copy).Parse();

    expect(result[0].instance_segment.label).toEqual("chicken");
  })
})
