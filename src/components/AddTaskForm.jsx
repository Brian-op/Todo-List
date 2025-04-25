import React from "react";

const AddTaskForm = () => {
	return (
		<div className="add-task-container">
			<form id="add-task-form"
							
				onSubmit={() => alert('The form has been submitted')}
			>
				<input id="task-input" placeholder="Add a new task..." required />

				<button id="add-task-btn">
					<i className="fas fa-plus"></i>
				</button>
				
			</form>
		</div>
	);
};

export default AddTaskForm;