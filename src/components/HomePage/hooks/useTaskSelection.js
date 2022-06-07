import {useMemo, useState} from "react";
import {image_classification} from "../../../helpers/TaskIDs";
import Task from "../../../helpers/Task";


export default function useTaskSelection() {
  const [selectedTask, setSelectedTask] = useState(image_classification);

  const tasks = useMemo(() => Task.getStaticTasks(), []);


  const getTaskById = (id) => tasks.find(t => t.id === id);

  const task = useMemo(() =>
      getTaskById(selectedTask)
    , [selectedTask]);

  const updateTask = (task) => {
    if (getTaskById(task.id))
      setSelectedTask(task.id);
  }

  const taskIsSelected = (task) => task.id === selectedTask;


  return {selectedTask: task, updateTask, tasks, taskIsSelected};
}
