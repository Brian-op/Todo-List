import React from 'react';
import TaskItem from './TaskItem';

const TasksContainer = ({ tasks, onToggle, onDelete }) => {
    return (
        <div className="tasks-container">
            <div className="tasks-header">
                <h2>Your Tasks</h2>
            </div>
            <ul className="tasks-list" >
            {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task} onToggle={onToggle} onDelete={onDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksContainer;