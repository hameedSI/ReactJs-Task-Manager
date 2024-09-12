import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-success' : ''}`}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <div>
        <button className="btn btn-sm btn-success me-2" onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
