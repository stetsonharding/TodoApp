import React from "react";

import "./CompletedTask.css";

export default function CompletedTask(props) {
  const { task } = props;
  return (
    <>
      <div>
        <h2>{task.title}</h2>
      </div>
    </>
  );
}
