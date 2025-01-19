// src/TaskItem.jsx

import React from 'react';

function TaskItem({ task, deleteTask, toggleCompletion }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
      />
      <span>{task.name}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
