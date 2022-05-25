import React, {useMemo} from "react";
import ModelListContainer from "./ModelListContainer";
import GetApiHelper from "../helpers/api";
import {useHistory} from "react-router-dom";
import Task from "../helpers/Task";

export default function NewExperimentContainer(props) {
  const api = useMemo(() => GetApiHelper(), []);
  const History = useHistory();
  const {task} = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const {id: taskId} = Task.getStaticTask(task);

  const runModels = async (selectedModels) => {
    const [first, ...rest] = selectedModels;
    const input = "";

    const firstResult = await api.runTrial(first, "");
    const experimentId = firstResult.experimentId;

    const trialPromises = rest.map(model => {
      return api.runTrial(model, "", experimentId);
    });

    Promise.all(trialPromises).then(final => {
      if (History)
        History.push(`/experiment/${experimentId}`);
    })
  }


  return <ModelListContainer
    add runModels={runModels} selectedModels={[]}
    hideTaskFilters
    task={taskId}
  />
}
