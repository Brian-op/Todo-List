import React from 'react';

const TasksCount = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.completed).length;
    return (
        <div className="tasks-count">
            <p>{completedTasks} of {tasks.length} tasks completed</p>
        </div>
    );
};

export default TasksCount;