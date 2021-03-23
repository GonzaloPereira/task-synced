import React from 'react';
import './Notification.css';
import Notification from './Notification';

export default function Notifications() {
  const nots = ['Feature coming soon'];

  return (
    <div className="not-container">
      {nots.map((not, idx) => (
        <Notification key={not} not={not} />
      ))}
    </div>
  );
}
