import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { getTasks, deleteTask } from '../utils/storage';

const statusOrder = {
  'In Progress': 1,
  'Done': 3,
  'To-Do': 2,
};

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDelete = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === 'asc') {
      return statusOrder[a.status] - statusOrder[b.status];
    } else {
      return statusOrder[b.status] - statusOrder[a.status];
    }
  });

  const sortByStatusHandler=(e)=>{
    e.preventDefault();
    if(sortOrder==='asc'){
      setSortOrder('desc')
    }
    else if(sortOrder==='desc'){
      setSortOrder('asc');
    }
  }

  return (
    <div>
      <h1>Task List</h1>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={sortByStatusHandler}>Sort by Status</button>
      </div>
      <TaskList tasks={sortedTasks} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;
