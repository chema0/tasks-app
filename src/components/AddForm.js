import '../App.scss';
import React, { useState } from 'react';

const AddForm = props => {
    const { handleAddItem } = props;
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); // Avoid page refresh
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description, 
        });
    }

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="text"
                placeholder="Task.."
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button className="addBtn">
                Add
            </button>
        </form>
    );
}

export default AddForm;