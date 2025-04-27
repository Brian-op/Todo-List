import React from "react";
import TaskItem from "./TaskItem";

const TasksContainer = ({ tasks, onToggle }) => {
    return (
        <div className="tasks-container">
            <div className="tasks-header">
                <h2>Your Tasks</h2>
            </div>
            <div id="tasks-list">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onToggle={onToggle} />
                ))}
            </div>
        </div>
    );
};

export default TasksContainer;