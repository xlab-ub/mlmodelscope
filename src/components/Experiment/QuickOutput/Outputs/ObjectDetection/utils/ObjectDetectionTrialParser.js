import GroupBy from "./GroupBy";
import ShadeColor from "./ShadeColor";

export default class ObjectDetectionTrialParser {
  colors = [
    {
      name: "electric-green",
      background: "#59EAD8",
      font: "#000000"
    },
    {
      name: "sky-blue",
      background: "#5FA9FF",
      font: "#000000"
    },
    {
      name: "pika-yellow",
      background: "#EAEE2A",
      font: "#000000"
    },
    {
      name: "ultra-pink",
      background: "#EA6CFF",
      font: "#000000"
    },
    {
      name: "peach",
      background: "#F89D83",
      font: "#000000"
    },
    {
      name: "periwinkle",
      background: "#9383F8",
      font: "#000000"
    },
    {
      name: "gold-leaf",
      background: "#EEB72A",
      font: "#000000"
    },
    {
      name: "salmon",
      background: "#EF6C6C",
      font: "#000000"
    },
    {
      name: "electric-mint",
      background: "#81EFB4",
      font: "#000000"
    },
    {
      name: "cornflower-blue",
      background: "#98B2DA",
      font: "#000000"
    }
  ];

  constructor(trialResults) {
    this.results = trialResults;
  }

  Parse() {
    return this._join(this._colorSections(this._split()));
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

  _colorSections(sections) {
    if (Array.isArray(sections))
      return sections.map((section, i) => this._populateSection(section, i));

    return [];
  }

  _getColor(index) {
    const colors = this.colors;
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
