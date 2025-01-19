// src/App.jsx

import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Load tasks from localStorage on initial load
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle adding a task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Handle deleting a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Handle toggling task completion
  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle category filter change
  const filteredTasks = categoryFilter === 'All'
    ? tasks
    : tasks.filter((task) => task.category === categoryFilter);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div>
        <label>Filter by category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;
