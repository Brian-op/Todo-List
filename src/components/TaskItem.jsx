import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <div className="task">
            <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span>{task.title}</span>
            <button className="delete-button" onClick={() => onDelete(task.id)}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
};

export default TaskItem