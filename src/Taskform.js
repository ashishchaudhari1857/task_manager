// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" value={task} onChange={handleChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
