import React, { useState } from "react";

import TaskList from "./TaskList";
import AddForm from "./AddForm";

const Container = () => {
	const [tasks, setTasks] = useState([]); 

	const handleAddItem = addItem => {
		setTasks([...tasks, addItem]); 
	};

	const handleDeleteItem = () => {
		setTasks(tasks.filter(item => item.done !== true));
	};

	const handleDeleteAll = () => {
		setTasks([]);
	}

	return (
		<div>
            <h1 className="titleList">Task List</h1>
			<AddForm handleAddItem={handleAddItem} />
			<TaskList 
				tasks={tasks} 
				setTasks={setTasks} 
			/>
			<button 
				className="delete-btn" 
				onClick={handleDeleteItem} >
					Delete
			</button>
			<button 
				className="delete-btn" 
				onClick={handleDeleteAll} >
					Delete all
			</button>
		</div>
	);
};

export default Container;