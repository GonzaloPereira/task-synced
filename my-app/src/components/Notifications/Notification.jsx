import React, { useState, useRef, useEffect } from 'react';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import moment from 'moment';
import { deleteNotification } from '../../request/user';

function getIcon(type) {
  switch (type) {
    case 1:
      return <PlaylistAddIcon className="notification-icon blue-icon" />;
    case 2:
      return <PlaylistAddCheckIcon className="notification-icon red-icon" />;
    case 3:
      return <GroupAddIcon className="notification-icon blue-icon" />;
    case 4:
      return <EditIcon className="notification-icon blue-icon" />;
    case 5:
      return <EditIcon className="notification-icon blue-icon" />;
    case 6:
      return <HighlightOffIcon className="notification-icon red-icon" />;
    case 7:
      return <SupervisorAccountIcon className="notification-icon blue-icon" />;
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
      <p className="notification-date">{moment(new Date(date)).fromNow()}</p>
      <DoneOutlineIcon
        className="notification-done blue-icon"
        onClick={handleDeleteNotification}
      />
    </div>
  );
}
