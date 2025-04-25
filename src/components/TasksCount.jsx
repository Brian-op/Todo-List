import React from 'react';
import { tasks } from '../data/tasks';

const TasksCount = () => {
	return (
		<div className="task-stats">
			<p>
				<span id="tasks-count">
					{
						tasks.filter(task=>!task.completed).length
					}			
				</span> tasks left
			</p>
		</div>
	);
};

export default TasksCount;