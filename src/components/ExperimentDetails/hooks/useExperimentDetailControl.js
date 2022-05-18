import {useEffect, useMemo, useState} from "react";
import clone from "../../../helpers/cloner";
import GetApiHelper from "../../../helpers/api";
import {useRouteMatch} from "react-router-dom";

export default function useExperimentDetailControl() {
  const [experiment, setExperiment] = useState(null);
  const [trials, setTrials] = useState([]);
  const [inputs, setInputs] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  const [trialToDelete, setTrialToDelete] = useState(null);
  const [trialIsDeleting, setTrialIsDeleting] = useState(false);
  const [showModelCannotBeRemoved, setShowModelCannotBeRemoved] = useState(false);
  const [trialSubscriptions, setTrialSubscriptions] = useState([]);

  const {experimentId} = useRouteMatch().params;


  const api = useMemo(() => GetApiHelper(), []);

  const getCurrentTrials = () => trials ?? [];

  function makeExperiment() {
    return {
      id: experiment ? experiment.id : null,
      trials: getCurrentTrials()
    }
  }

  const getUniqueModelIds = () => trials.filter((trial, idx, arr) => arr.findIndex(t => t.model.id === trial.model.id) === idx);

  const getTrials = () => {
    const trialSubs = clone(trialSubscriptions);
    experiment.trials.forEach(trial => {
      if (!trialSubs[trial.id])
        trialSubs[trial.id] = api.getTrial(trial.id).subscribe({
          next: trialOutput => {
            const trialClone = clone(trials);
            const currentIndex = trialClone.findIndex(t => t.id === trialOutput.id);

            if (currentIndex === -1) {
              trialClone.push(trialOutput);
            } else {
              trialClone[currentIndex] = trialOutput;
            }
            setTrials(trialClone);
          }
        });
    });
    setTrialSubscriptions(trialSubs);
  }

  const showDeleteModal = (trial) => {
    if (trials.length > 1)
      setTrialToDelete(trial);
    else
      setShowModelCannotBeRemoved(true);
  }

  const cancelDeleteTrial = () => setTrialToDelete(true);

  const confirmDeleteTrial = async () => {
    setTrialIsDeleting(true);
    setTimeout(async () => {
      const trialId = trialToDelete.id;
      try {
        await api.deleteTrial(trialId);
        trialSubscriptions[trialId].unsubscribe();
        trialSubscriptions[trialId] = undefined;

        let trials = trials.filter(t => t.id !== trialId);

        setTrials(trials);
        setTrialToDelete(null);
      } catch (e) {
        setShowModelCannotBeRemoved(true);
        setTrialToDelete(null);
      }
    }, 500);
  }

  const confirmModelCannotBeRemoved = () => setShowModelCannotBeRemoved(false);

  const getExperiment = async () => {
    let experimentSubscription = api.getExperiment(experimentId).subscribe({
      next: exp => {
        setExperiment(exp);
      }
    })
  }

  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);

  }

  const addInput = (input) => {
    let newInputs = Array.from(inputs);
    newInputs.push(input);
    setInputs(newInputs);
  }
  const removeInput = input => {
    let newInputs = Array.from(inputs);
    let index = newInputs.findIndex(i => i === input);
    newInputs.splice(index, 1);
    setInputs(newInputs);
  }


  useEffect(() => {
    (async () => await getExperiment())();
  }, [])
  useEffect(() => {
    return () => {
      trialSubscriptions.forEach(s => s.unsubscribe());
    }
  }, []);
  useEffect(() => {
    if (experiment)
      getTrials(experiment);
  }, [experiment?.id, inputs.length])


  return {
    updateIndex,
    getExperiment,
    confirmModelCannotBeRemoved,
    confirmDeleteTrial,
    cancelDeleteTrial,
    showDeleteModal,
    makeExperiment,
    trialIsDeleting,
    showModelCannotBeRemoved,
    experiment: makeExperiment(),
    trials,
    currentIndex,
    inputs,
    addInput,
    removeInput
  }

}
