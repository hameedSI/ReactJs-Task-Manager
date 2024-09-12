import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className={`card ${task.completed ? 'border-success' : ''}`}>
        <div className="card-body">
          <h5 className={`card-title ${task.completed ? 'text-success' : ''}`} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </h5>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-success" onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
