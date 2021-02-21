import '../App.scss';
import React, { Fragment } from 'react';

const Task = props => {
    const { item, dataKey, handleChange } = props;

    // Plantear uso de Fragment
    return (
        <li className="task-item">
            <input type="checkbox" className="hidden-box" name={dataKey} id={dataKey} onChange={handleChange} />
            <label for={dataKey} className="check--label">
            <span className="check--label-box"></span>
            <span className="check--label-text">{item.description}</span>
            </label>
        </li>
    );
}

export default Task;