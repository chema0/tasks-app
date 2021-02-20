import '../App.css';
import React, { useState } from 'react';

import Task from './Task.js';

const TaskList = props => {
  const { tasks, setTasks, handleDeleteItem, handleEditItem } = props;

  const tsk = tasks.map(item => 
    <Task
      key={item.id} 
      item={item} 
      dataKey={item.id} 
      handleDeleteItem={handleDeleteItem}
      handleEditItem={handleEditItem} 
    />
  );

  return (
    <div className="taskList">
        {tasks.length ? tsk : "No tasks"}
    </div>
  );
}

export default TaskList;