import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { getTasks, deleteTask } from '../utils/storage';

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDelete = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  return (
    <div>
      <h1>Task List</h1>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;

