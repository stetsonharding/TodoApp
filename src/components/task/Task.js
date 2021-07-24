import React, { useState } from "react";
import EditTask from "../editTask/EditTask";
import TaskButtons from "../taskButtons/TaskButtons";
import TaskArrow from "../../assets/task-arrow.svg";

import "./Task.css";

export default function Task({ task }) {
  const [editedTask, setEditedTask] = useState(task.title);
  const [isEditInputShown, setIsEditInputShown] = useState(false);

  return (
    <>
      <div className="task__container">
        <div className="task">
          {/* show edit input if isEditInputShown is true, show task title if false */}
          {isEditInputShown ? (
            <EditTask
              task={task}
              setEditedTask={setEditedTask}
              setIsEditInputShown={setIsEditInputShown}
              editedTask={editedTask}
            />
          ) : (
            <p>
              <img
                src={TaskArrow}
                alt=""
                style={{ width: "13px", margin: " 0 5px" }}
              />
              {task.title}
            </p>
          )}
        </div>
        {/* task buttons seperated for logic */}
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
