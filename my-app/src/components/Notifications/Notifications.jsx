import React from 'react';
import './Notification.css';
import Notification from './Notification';

export default function Notifications({ userId, refreshUser, notifications }) {
  return (
    <div className="notification-container">
      {notifications.map((notification, idx) => (
        <div key={notification._id}>
          {idx !== 0 && <hr className="teams-separator-line" />}
          <Notification
            className="notification"
            notification={notification}
            userId={userId}
            refreshUser={refreshUser}
          />
        </div>
      ))}
    </div>
  );
}
