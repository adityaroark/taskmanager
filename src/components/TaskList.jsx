import React from 'react';

function TaskList({ selectedDate, selectedTask, deleteTask }) {
  if (!selectedTask || selectedTask.task === 'No task assigned') {
    return <p>No tasks for {selectedDate}</p>;
  }

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the task on ${selectedDate}?`)) {
      deleteTask(selectedDate);  // Trigger task deletion
    }
  };

  return (
    <div className="task-list">
      <h3>Task for {selectedDate}</h3>
      <p>
        <strong>Task:</strong> {selectedTask.task} <br />
        <strong>Status:</strong> {selectedTask.status}
      </p>
      <button onClick={handleDelete}>Delete Task</button>
    </div>
  );
}

export default TaskList;
