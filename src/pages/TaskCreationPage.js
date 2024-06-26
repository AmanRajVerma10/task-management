import React from 'react';
import TaskForm from '../components/TaskForm';
import { useHistory } from 'react-router-dom';
import { addTask } from '../utils/storage';

function TaskCreationPage() {
  const history = useHistory();

  const handleSave = (task) => {
    addTask(task);
    history.push('/');
  };

  return (
    <div>
      <h1>Create New Task</h1>
      <TaskForm onSave={handleSave} />
    </div>
  );
}

export default TaskCreationPage;
