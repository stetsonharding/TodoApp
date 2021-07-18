import React from "react";

import "./CompletedTask.css";

export default function CompletedTask({ task }) {
  return (
    <>
      <div className="completedTask__container">
        <h2>{task.title}</h2>
      </div>
    </>
  );
}
