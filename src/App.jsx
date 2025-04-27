import React, { useEffect, useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import TasksCount from './components/TasksCount';
import { tasks as initialTasks } from './data/tasks';

const App = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = async (title) => {
        const newTask = {
            id: Date.now().toString(),
            title,
            completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);

        const response = await fetch("http://localhost:300o/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        });

        if (!response.ok) {
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== newTask.id));
            alert("Failed to add task. Please try again.");
        }
    };

    const onToggle = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="container">
            <Header />
            <AddTaskForm onAddTask={addTask} />
            <TasksContainer tasks={tasks} onToggle={onToggle} />
            <TasksCount tasks={tasks} />
        </div>
    );
};

export default App;