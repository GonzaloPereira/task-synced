import React, { useState, useEffect } from 'react';
import './Schedule.css';
import { useAuth } from '../contexts/AuthContext';
import TaskContainer from '../Task/TaskContainer';

function Schedule() {
  const { currentUser } = useAuth();
  const { tasks } = currentUser;
  return (
    <div className="schedule">
      <h2>Tasks</h2>
      <TaskContainer tasks={tasks} style={{ borderRadius: '5px' }} />
    </div>
  );
}

export default Schedule;
