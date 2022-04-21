import GroupBy from "./GroupBy";
import ShadeColor from "./ShadeColor";
import {colors} from "./Colors";

export default class ObjectDetectionTrialParser {


  constructor(trialResults) {
    this.results = trialResults;
  }

  Parse() {
    return this._join(new ColorGenerator().ColorSections((this._split())));
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
    return GroupBy(this.results.results.responses[0].features, "bounding_box", "label");
  }


}

export class ColorGenerator {
  ColorSections(sections) {
    if (Array.isArray(sections))
      return sections.map((section, i) => this._populateSection(section, i));

    return [];
  }

  CreateColorMapping(uniqueNumbers) {
    if (Array.isArray(uniqueNumbers))
      return uniqueNumbers.map((number, i) => ({number: number, ...this._getColor(i)}));


    return [];
  }

  _getColor(index) {
    let groupNumber = Math.floor((index / colors.length));
    if (groupNumber === Infinity) groupNumber = 0;

    const remainder = (index % colors.length) || 0;
    const color = colors[remainder];

    return {
      className: `color-block color-block__${color.name} color-block__group-${groupNumber}`,
      backgroundColor: ShadeColor(color.background, groupNumber * 5),
      fontColor: color.font
    }
  }

  _populateSection(section, sectionIndex) {
    if (Array.isArray(section)) {
      const colorObject = this._getColor(sectionIndex);

      return section.map(sec => ({...sec, color: colorObject}));
    }
    return [];
  }
}
