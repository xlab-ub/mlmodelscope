import {useEffect, useState} from "react";
import Task from "../../../helpers/Task";


export default function useOutputGenerator(task) {
  const getNewOutput = () => {
    return (Task.getSampleOutput(task));
  }

  const [output, setOutput] = useState(getNewOutput());

  useEffect(() => {
    setOutput(getNewOutput());
  }, [task])

  return output;
}
