import React from 'react'

const TaskItem = ({task}) => {
  return (
    <div className="task">
						<input 
						 type="checkbox"
						 className="checkbox" 
						 checked={task.completed}
						/>

						<span>{task.title}</span>
						
						<button className="delete-button">
							<i className="fa-solid fa-trash"></i>
						</button>
					</div>
  )
}

export default TaskItem;