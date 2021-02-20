import React, { useState } from "react";

import TaskList from "./TaskList";
import AddForm from "./AddForm";

const Container = () => {
	const [tasks, setTasks] = useState([]); 

	const handleAddItem = addItem => {
		setTasks([...tasks, addItem]); 
	};

	const handleDeleteItem = deleteItem => {
		setTasks(tasks.filter(item => item.id !== deleteItem));
	};

	const handleEditItem = (editItemId, editItem) => {
		tasks.filter(item => item.id === editItemId).description = editItem.description;
	}

	return (
		<div>
            <h1 className="titleList">Task List</h1>
			<AddForm handleAddItem={handleAddItem} />
			<TaskList 
				tasks={tasks} 
				setTasks={setTasks} 
				handleDeleteItem={handleDeleteItem} 
				handleEditItem={handleEditItem}
			/>
		</div>
	);
};

export default Container;