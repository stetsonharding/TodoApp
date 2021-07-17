import React, { useContext, useState } from "react";
import EditTask from "../editTask/EditTask";
// import {Context} from "../../Context"
import TaskButtons from "../taskButtons/TaskButtons";

import "./Task.css";

export default function Task(props) {
  const { task } = props;
  const [editedTask, setEditedTask] = useState(task.title);
  const [isEditInputShown, setIsEditInputShown] = useState(false);

  return (
    <>
      <div className="task__container">
        <div className="task">
          {isEditInputShown ? (
            <EditTask
              task={task}
              setEditedTask={setEditedTask}
              setIsEditInputShown={setIsEditInputShown}
              editedTask={editedTask}
            />
          ) : (
            <p>
              <span>Task:</span> {task.title}{" "}
            </p>
          )}
        </div>
        <div className="task__buttons-container">
          <TaskButtons
            task={task}
            setIsEditInputShown={setIsEditInputShown}
            setEditedTask={setEditedTask}
          />
        </div>
      </div>
    </>
  );
}
