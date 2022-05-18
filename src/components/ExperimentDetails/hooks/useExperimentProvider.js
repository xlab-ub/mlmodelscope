import {useRouteMatch} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import GetApiHelper from "../../../helpers/api";

export default function useExperimentProvider() {
  const [experiment, setExperiment] = useState(null);

  const api = useMemo(() => GetApiHelper(), []);
  const {experimentId} = useRouteMatch().params;

  useEffect(() => {
    api.getExperiment(experimentId).subscribe({
      next: exp => setExperiment(exp)
    });
  }, [])

  return {experiment}
}
