import React, { useReducer } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Notifications from '../Notifications/Notifications';

function Header() {
  const { url } = useRouteMatch();
  const [showNots, toggleShowNots] = useReducer((state) => !state, false);
  return (
    <div className="header">
      <div className="left">
        <h1 className="links">Task Synced</h1>
      </div>
      <div className="right">
        <Link to={`${url}/schedule`}>
          <h2 className="links">Schedule</h2>
        </Link>
        <Link to={`${url}/teams`}>
          <h2 className="links">Teams</h2>
        </Link>
        <Link to={`${url}/profile`}>
          <h2 className="links">Profile</h2>
        </Link>
        <NotificationsIcon
          onClick={toggleShowNots}
          className="links not-icon"
        />
      </div>
      {showNots && <Notifications />}
    </div>
  );
}

export default Header;
