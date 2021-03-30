import React, { useReducer } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Notifications from '../Notifications/Notifications';
import NotificationCount from '../Notifications/NotificationCount';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const { url } = useRouteMatch();
  const [showNots, toggleShowNots] = useReducer((state) => !state, false);
  const { currentUser, refreshUser } = useAuth();
  const { notifications } = currentUser;
  const notificationCount = notifications.length;
  return (
    <>
      <div className="header">
        <h1 className="links">Task Synced</h1>
        <Link
          to={`${url}/schedule`}
          className="schedule-link links material-ui-link"
        >
          <h2>Schedule</h2>
        </Link>
        <Link
          to={`${url}/teams`}
          className="teams-link  links material-ui-link"
        >
          <h2>Teams</h2>
        </Link>

        <Link
          to={`${url}/profile`}
          className="profile-link links material-ui-link"
        >
          <h2>Profile</h2>
        </Link>
        <div className="notification-open-icon">
          <NotificationsIcon onClick={toggleShowNots} className="links " />
          {notificationCount > 0 && (
            <NotificationCount count={notificationCount} />
          )}
        </div>
      </div>
      {showNots && (
        <Notifications
          userId={currentUser._id}
          refreshUser={refreshUser}
          notifications={notifications}
        />
      )}
    </>
  );
}

export default Header;
