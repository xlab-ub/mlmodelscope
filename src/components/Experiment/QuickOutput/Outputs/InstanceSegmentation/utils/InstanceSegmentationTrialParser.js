import TrialParser from "../../_Common/utils/TrialParser";
import clone from "../../../../../../helpers/cloner";

export default class InstanceSegmentationTrialParser extends TrialParser {
  constructor(trialResults) {
    super(trialResults);
    this.groupingLabels = ["instance_segment", "label"];
  }

  _filter() {
    let preFiltered = clone(super._filter());

    preFiltered.results.responses[0].features = preFiltered.results.responses[0].features.filter(this._validateFeature.bind(this));

    return preFiltered;
  }

  isValidNumber(val) {
    return val !== null && val !== undefined && typeof (val) === "number";
  }

  _validateFeature(feature) {
    return this._hasValidProbability(feature) && this._hasBoundingCoordinates(feature);
  }

  _hasValidProbability(feature) {
    return this.isValidNumber(feature.probability) && feature.probability > 0.01;
  }

  _hasBoundingCoordinates(feature) {

    return this.isValidNumber(feature.instance_segment.xmax) && this.isValidNumber(feature.instance_segment.xmin) && this.isValidNumber(feature.instance_segment.ymax) && this.isValidNumber(feature.instance_segment.ymin);
  }
}
