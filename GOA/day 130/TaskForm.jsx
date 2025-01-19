// src/TaskForm.jsx

import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        category: category,
        completed: false,
      };
      addTask(newTask);
      setTaskName('');
      setCategory('Work');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
