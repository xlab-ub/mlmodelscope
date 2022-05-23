import useBEMNaming from "../../common/useBEMNaming";
import {HomePageSectionHeading} from "./HomePageSectionHeading";
import React from "react";
import useTaskExampleControl from "./hooks/useTaskExampleControl";
import {Link} from "react-router-dom";
import {TaskControls} from "./TaskControls";
import {TaskCard} from "./TaskCard";
import "./TaskExamples.scss";
import Task from "../../helpers/Task";

export function TaskExamples(props) {
  const {getBlock, getElement} = useBEMNaming("home-page-tasks");
  const {taskSelection, quickExperiment, navigation} = useTaskExampleControl();

  const taskIconProps = {
    className: getElement("selected-task-icon")
  }

  const {name, description, Icon, defaultModel, sampleInputs, homePageDescription} = taskSelection.selectedTask;
  let taskName = name;


  const sampleInput = props.demoTrialOutput;
  if (sampleInput) {
    let demoTask = Task.getStaticTask(sampleInput.model.output.type);
    taskName = demoTask.name;
  }

  return <div className={getBlock()}>
    <HomePageSectionHeading title={"What can models do?"}
                            subtitle={"Models can perform a variety of tasks, like recognizing objects in an image or identifying a speaker in an audio file. Here are some model tasks you’ll find on this website."}/>
    <div className={getElement("section-content")}>
      <TaskControls tasks={taskSelection.tasks} taskIsSelected={taskSelection.taskIsSelected}
                    updateTask={taskSelection.updateTask}
                    selectedTask={taskSelection.selectedTask}
      />
      <div className={getElement("selected-task-header")}>
        <p className={getElement("selected-task-title")}>
          <Icon {...taskIconProps} /> {taskName}
        </p>
        <p className={getElement("selected-task-description")}>{homePageDescription}</p>

        <Link className={getElement("selected-task-link")} to={`/models?task=${taskName}`}>See
          all {taskName} models</Link>


      </div>

      <TaskCard
        defaultModel={defaultModel}
        runTrial={quickExperiment.runTrial}
        sampleInputs={sampleInputs}
        trial={sampleInput || quickExperiment.trial}
        onBackClicked={navigation.onBackClick}
        onCompare={navigation.onCompare}
      />
    </div>
  </div>
}
