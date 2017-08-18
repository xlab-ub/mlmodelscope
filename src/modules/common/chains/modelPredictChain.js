import { set, when } from "cerebral/operators";
import { state, props } from "cerebral/tags";
import onError from "./onError";
import { predict } from "../operators";

export default [
  when(
    state`app.isPredicting`,
    props`selectedModels`,
    (isPredicting, models) =>
      isPredicting !== true && (models !== undefined || models.length !== 0)
  ),
  {
    true: [
      set(state`app.isPredicting`, true),
      predict({ inputs: state`app.predictURL`, models: props`selectedModels` }),
      {
        success: [set(state`app.features`, props`features`)],
        error: onError
      },
      set(state`app.isPredicting`, false)
    ],
    false: []
  }
];
