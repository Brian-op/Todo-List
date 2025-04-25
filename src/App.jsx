import { useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import TasksCount from './components/TasksCount';

const App = () => {
    useEffect(()=>{
		fetch("")
		.then((res)=>res.json())
	})

	return (
		<div className="container">
			<Header />
			<AddTaskForm />
			<TasksContainer />
			<TasksCount/>
		</div>
	);
};

export default App;