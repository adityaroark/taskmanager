import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, selectedDate }) {
  const [taskDate, setTaskDate] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');

  // Automatically update the date field when a date is selected in the calendar
  useEffect(() => {
    if (selectedDate) {
      setTaskDate(selectedDate);
    }
  }, [selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDate && taskDescription && taskStatus) {
      addTask(taskDate, taskDescription, taskStatus);
      setTaskDescription('');
      setTaskStatus('');
    }
  };

  return (
    <div className="task-section">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label>Select Date:</label>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Task Description:</label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task details"
            required
          />
        </div>
        <div className="form-group">
          <label>Task Status:</label>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            required
          >
            <option value="" disabled>Select status</option>
            <option value="done">Done</option>
            <option value="in-progress">In Progress</option>
            <option value="undone">Undone</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
