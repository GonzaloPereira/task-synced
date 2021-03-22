import React, { useState, useEffect } from 'react';
import './Schedule.css';
import { useAuth } from '../contexts/AuthContext';

function Schedule() {
  const [list, setList] = useState([]);
  const { currentUser } = useAuth();
  const { tasks } = currentUser;

  useEffect(() => {
    setList(tasks);
  }, []);

  return (
    <div className="schedule">
      <h2>Tasks:</h2>
      <ul>
        {list.map((task) => (
          <li key={task._id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
