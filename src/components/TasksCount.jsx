import React from 'react';

const TasksCount = ({ tasks }) => {
	return (
		<div className="task-stats">
			<p>
				<span id="tasks-count">
					{tasks.filter(task => !task.completed).length}
				</span> tasks left
			</p>
		</div>
	);
};

export default TasksCount;