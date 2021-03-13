import React, { useState } from 'react';
import './Schedule.css';

function Schedule() {
  const [list, setList] = useState([{ title: 'La primera tarea' }]);

  return (
    <div className="schedule">
      <h2>Tasks:</h2>
      <ul>
        {list.map((task) => (
          <li key={task.title}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
