import GroupBy from "./GroupBy";
import {ColorGenerator} from "./ColorGenerator";

export default class TrialParser {
  constructor(trialResults) {
    this.results = trialResults;
    this.groupingLabels = [];
  }

  Parse() {
    const split = this._split();
    const colored = new ColorGenerator().ColorSections(split);
    return this._join(colored);
  }

  _split() {
    const grouped = this._groupResults();
    return Object.keys(grouped).map(key => grouped[key]);
  }

  _join(grouped) {
    let result = [];
    grouped.forEach(group => {
      result.push(...group);
    });
    return result;
  }

  _groupResults() {
    return GroupBy(this.results.results.responses[0].features, ...this.groupingLabels);
  }
}
