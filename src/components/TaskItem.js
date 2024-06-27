import React from 'react';
import { Link } from 'react-router-dom';

function TaskItem({ task, onDelete }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.dueDate}</p>
      <p>{task.status}</p>
      <Link to={`/task/${task.id}`}>View Details</Link>
      <button onClick={() => onDelete(task.id)}>Delete Task</button>
    </div>
  );
}

export default TaskItem;
