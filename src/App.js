import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage when the app initializes or set initial dummy data
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks.length > 0) {
      setTasks(storedTasks);
    } 
   
  }, []);
  
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
   
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
