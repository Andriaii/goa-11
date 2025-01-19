// src/TaskList.jsx

import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleCompletion }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
}

export default TaskList;
