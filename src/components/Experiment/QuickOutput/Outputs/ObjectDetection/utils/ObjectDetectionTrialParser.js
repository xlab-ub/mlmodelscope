import TrialParser from "../../_Common/utils/TrialParser";

export default class ObjectDetectionTrialParser extends TrialParser {
  constructor(trialResults) {
    super(trialResults);
    this.groupingLabels = ["bounding_box", "label"];
  }
}

