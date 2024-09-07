import React, { useState } from 'react';
import Calendar from './components/Calendar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState({
    '2024-09-01': { status: 'done', task: 'Complete the report' },
    '2024-09-02': { status: 'in-progress', task: 'Work on alumni project' },
    '2024-09-03': { status: 'undone', task: 'Meeting with the team' },
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (taskDate, taskDescription, taskStatus) => {
    setTasks({
      ...tasks,
      [taskDate]: { task: taskDescription, status: taskStatus },
    });
    setSelectedDate(taskDate); // Automatically select the date after adding a task
    setSelectedTask({ task: taskDescription, status: taskStatus });
  };

  const deleteTask = (taskDate) => {
    const updatedTasks = { ...tasks };
    delete updatedTasks[taskDate]; // Remove the task from the tasks object
    setTasks(updatedTasks);

    // Clear selected date and task if the deleted task was currently selected
    if (selectedDate === taskDate) {
      setSelectedDate('');
      setSelectedTask(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Task Calendar</h1>
      <Calendar
        currentDate={currentDate}
        tasks={tasks}
        onSelectDate={(date, task) => {
          setSelectedDate(date);
          setSelectedTask(task);
        }}
        setCurrentDate={setCurrentDate}
      />
      <TaskForm addTask={addTask} selectedDate={selectedDate} />
      <TaskList
        selectedDate={selectedDate}
        selectedTask={selectedTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
