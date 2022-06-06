import GroupBy from "./GroupBy";
import {ColorGenerator} from "./ColorGenerator";

export default class TrialParser {
  constructor(trialResults) {
    this.results = trialResults;
    this.groupingLabels = [];
  }

  Parse() {
    let filtered = this._filter();
    const split = this._split(filtered);
    const colored = new ColorGenerator().ColorSections(split);
    return this._join(colored);
  }

  _filter() {
    return this.results;
  }

  _split(filtered) {
    const grouped = this._groupResults(filtered);
    return Object.keys(grouped).map(key => grouped[key]);
  }

  _join(grouped) {
    let result = [];
    grouped.forEach(group => {
      result.push(...group);
    });
    return result;
  }

  _groupResults(filtered) {
    return GroupBy(filtered.results.responses[0].features, ...this.groupingLabels);
  }
}
