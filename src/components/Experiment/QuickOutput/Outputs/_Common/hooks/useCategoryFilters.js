import GroupBy from "../utils/GroupBy";
import {useState} from "react";
import clone from "../../../../../../helpers/cloner";

export function useCategoryFilters(sections, ...groupingLabels) {
  const getDefaultLabels = () => {
    const groups = GroupBy(sections, ...groupingLabels);
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

  const drillDownIntoObject = (object, ...properties) => {
    let obj = object;
    properties.forEach(property => {
      obj = obj[property];
    })
    return obj;
  }

  const labelIsInCategories = (section) => {
    const label = drillDownIntoObject(section, ...groupingLabels);

    return categories.indexOf(label) > -1;
  }
  return {categories, toggleCategory, labelIsInCategories};
}
