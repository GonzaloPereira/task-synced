import React, { useReducer } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Notifications from '../Notifications/Notifications';

function Header() {
  const { url } = useRouteMatch();
  const [showNots, toggleShowNots] = useReducer((state) => !state, false);
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
        <NotificationsIcon
          onClick={toggleShowNots}
          className="links not-icon"
        />
      </div>
      {showNots && <Notifications />}
    </>
  );
}

export default Header;
