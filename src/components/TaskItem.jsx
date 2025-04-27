import React from 'react';

const TaskItem = ({ task, onToggle }) => {
    return (
        <div className="task">
            <input 
                type="checkbox"
                className="checkbox" 
                checked={task.completed}
                onChange={() => onToggle(task.id)} // Call onToggle with task.id
            />
            <span>{task.title}</span>
            <button className="delete-button">
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
};

export default TaskItem;