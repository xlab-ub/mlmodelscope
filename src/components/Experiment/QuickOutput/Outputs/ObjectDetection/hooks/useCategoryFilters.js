import GroupBy from "../utils/GroupBy";
import {useState} from "react";
import clone from "../../../../../../helpers/cloner";

export function useCategoryFilters(sections) {
  const getDefaultLabels = () => {
    const groups = GroupBy(sections, "bounding_box", "label");
    return Object.keys(groups);
  }

  const [categories, setCategories] = useState(getDefaultLabels());

  const toggleCategory = (category) => {
    const _temp = clone(categories);
    const idx = _temp.indexOf(category);

    if (idx > -1) _temp.splice(idx, 1);
    else _temp.push(category);

    setCategories(_temp);
  }
  const labelIsInCategories = (section) => {
    const label = section.bounding_box.label;

    return categories.indexOf(label) > -1;
  }
  return {categories, toggleCategory, labelIsInCategories};
}
