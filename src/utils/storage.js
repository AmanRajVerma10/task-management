const TASKS_KEY = 'tasks';

export const getTasks = () => {
  const tasks = localStorage.getItem(TASKS_KEY);
  console.log(JSON.parse(tasks));
  return tasks ? JSON.parse(tasks) : [];
};

export const getTaskById = (id) => {
  const tasks = getTasks();
  return tasks.find(task => task.id === id);
};

export const addTask = (task) => {
  const tasks = getTasks();
  task.id = new Date().getTime().toString();
  tasks.push(task);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const deleteTask = (id) => {
  let tasks = getTasks();
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  alert("Task Successfully Deleted!")
};

export const updateTaskStatus = (id, status) => {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex >= 0) {
    tasks[taskIndex].status = status;
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  }
};
