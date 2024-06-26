import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getTaskById, deleteTask, updateTaskStatus } from '../utils/storage';

function TaskDetailsPage() {
  const { id } = useParams();
  const history = useHistory();
  const [task, setTask] = useState(null);

  useEffect(() => {
    setTask(getTaskById(id));
  }, [id]);

  const handleDelete = () => {
    deleteTask(id);
    history.push('/');
  };

  const handleStatusChange = (status) => {
    updateTaskStatus(id, status);
    setTask({ ...task, status });
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleStatusChange('todo')}>To Do</button>
      <button onClick={() => handleStatusChange('in progress')}>In Progress</button>
      <button onClick={() => handleStatusChange('done')}>Done</button>
    </div>
  );
}

export default TaskDetailsPage;
