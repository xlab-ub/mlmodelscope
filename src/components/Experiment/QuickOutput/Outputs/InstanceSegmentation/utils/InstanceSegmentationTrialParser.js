import TrialParser from "../../_Common/utils/TrialParser";

export default class InstanceSegmentationTrialParser extends TrialParser {
  constructor(trialResults) {
    super(trialResults);
    this.groupingLabels = ["instance_segment", "label"];
  }
}
