import '../App.css';
import React from 'react';

// Add readOnly to input when task is added
const Task = props => {
    const { item, dataKey, handleDeleteItem, handleEditItem } = props;

    const handleClick = e => {
        e.preventDefault(); // Avoid page refresh
        handleDeleteItem(dataKey);
    };

    const handleChange = e => {
        e.preventDefault();
        handleEditItem(item, dataKey);
    }

    return (
        <div className="taskElement">
            <form onSubmit={handleClick}>
                <input className="taskDescription" value={item.description} onChange={handleChange} />
                <button className="deleteBtn">Delete</button>
            </form>
        </div>
    );
}

export default Task;