import {useEffect, useState} from "react";
import ShadeColor from "../utils/ShadeColor";

export default function useColorSelection(sections) {
  const colors = [
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
  ]

  const getColor = (index) => {
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


  const colorSections = (sections) => {
    if (Array.isArray(sections))
      return sections.map((sect, i) => ({...sect, color: getColor(i)}));

    return [];
  }

  const [coloredSections, setColoredSections] = useState(colorSections(sections));

  useEffect(() => {
    setColoredSections(colorSections());
  }, [sections.length]);

  return coloredSections;
}
