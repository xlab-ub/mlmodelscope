import useTaskSelection from "./useTaskSelection";
import useQuickExperimentControl from "./useQuickExperimentControl";
import {useHistory} from "react-router-dom";


export default function useTaskExampleControl() {
  const taskSelection = useTaskSelection();
  const quickExperiment = useQuickExperimentControl(taskSelection.selectedTask.defaultModel);

  const History = useHistory();


  const onBackClick = () => quickExperiment.resetTrial();
  const onCompare = () => {
    if (History) History.push(`/experiment/${quickExperiment.trial.id}`)
  }

  const navigation = {onBackClick, onCompare};


  return {taskSelection, quickExperiment, navigation};
}
