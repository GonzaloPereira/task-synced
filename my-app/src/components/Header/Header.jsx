import React from 'react';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header({ scheduleOn, teamsOn }) {
  return (
    <div className="header">
      <div className="left">
        <h1 className="links">Task Synced</h1>
      </div>
      <div className="right">
        <h2 className="links" onClick={scheduleOn}>
          Schedule
        </h2>
        <h2 className="links" onClick={teamsOn}>
          Teams
        </h2>
        <h2 className="links">Profile</h2>
        <NotificationsIcon className="links not-icon" />
      </div>
    </div>
  );
}

export default Header;
