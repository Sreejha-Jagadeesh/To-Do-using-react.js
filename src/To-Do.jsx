import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (newTask !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
      setError('');
    } else {
      console.log("Task can't be empty");
      setError("Task can't be empty");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">To-Do App</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Input for adding new task */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
          
          {/* List of tasks */}
          <ul className="list-group">
            {tasks.map((task, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {task}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
