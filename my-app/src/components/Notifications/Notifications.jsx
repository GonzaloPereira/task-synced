import React from 'react';
import './Notification.css';
import Notification from './Notification';

export default function Notifications() {
  const nots = ['A new task for Team 1', 'A new task for Team 2'];

  return (
    <div className="not-container">
      {nots.map((not, idx) => (
        <Notification key={not} not={not} />
      ))}
    </div>
  );
}
