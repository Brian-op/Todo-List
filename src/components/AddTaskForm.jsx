import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!taskText.trim()) return;
        onAddTask(taskText);
        setTaskText(""); // clear input after submit
    };

    return (
        <div className="add-task-container">
            <form id="add-task-form" onSubmit={handleSubmit}>
                <input
                    id="task-input"
                    placeholder="Add a new task..."
                    value={taskText}
                    onChange={(event) => setTaskText(event.target.value)}
                    required
                />
                <button id="add-task-btn">
                    <i className="fas fa-plus"></i>
                </button>
            </form>
        </div>
    );
};

export default AddTaskForm;