import '../App.scss';
import React from 'react';

import Task from './Task.js';

const TaskList = props => {
  const { tasks, setTasks } = props;

  const handleChange = e => {
    const { name, checked } = e.target;

    const updateTasks = tasks.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setTasks(updateTasks);
  }

  const tsk = tasks.map(item => 
    <Task
      key={item.id} 
      item={item} 
      dataKey={item.id} 
      handleChange={handleChange}
    />
  );

  return (
    <div className="tasks">
      <ul className="taskList">
          {tasks.length ? tsk : "No tasks"}
      </ul>
    </div>
  );
}

export default TaskList;