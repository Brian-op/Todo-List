import React, { useEffect, useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import TasksCount from './components/TasksCount';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                if (!response.ok) throw new Error("Failed to fetch tasks.");
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async (title) => {
        const newTask = {
            id: Date.now().toString(),
            title,
            completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);

        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
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

    const onDelete = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <Header />
            <AddTaskForm onAddTask={addTask} />
            <TasksContainer tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
            <TasksCount tasks={tasks} />
        </div>
    );
};

export default App;