import React, { useState, useRef, useEffect } from 'react';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { deleteNotification } from '../../request/user';

function getIcon(type) {
  switch (type) {
    case 1:
      return <PlaylistAddIcon className="notification-icon blue-icon" />;
    case 2:
      return <PlaylistAddCheckIcon className="notification-icon red-icon" />;
    case 3:
      return <GroupAddIcon className="notification-icon blue-icon" />;
    default:
      return <DoneOutlineIcon className="notification-icon" />;
  }
}
export default function Notification({ notification, refreshUser, userId }) {
  const { _id: notificationId, name, description, date, type } = notification;

  const timeoutId = useRef('');
  const intervalId = useRef('');
  const [opacity, setOpacity] = useState(1);

  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  async function handleDeleteNotification() {
    intervalId.current = setInterval(() => {
      setOpacity((prevOpacity) => prevOpacity - 0.05);
    }, 50);
    timeoutId.current = setTimeout(async () => {
      await deleteNotification(userId, notificationId);
      refreshUser();
    }, 1000);
  }

  return (
    <div className="notification" style={{ opacity }}>
      {getIcon(type)}
      <h5 className="notification-name">{name}</h5>
      <p className="notification-description"> {description}</p>
      <p className="notification-date">{new Date().toLocaleDateString()}</p>
      <DoneOutlineIcon
        className="notification-done blue-icon"
        onClick={handleDeleteNotification}
      />
    </div>
  );
}
