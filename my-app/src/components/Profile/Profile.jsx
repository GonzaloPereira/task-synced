import React from 'react';
import './Profile.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Profile() {
  return (
    <div className="profile">
      <h2>My Profile</h2>
      <div className="profile-pic">
        <AccountCircleIcon fontSize="inherit" />
      </div>
      <h3>Name</h3>
      <p>Gonzalo Pereira</p>
      <h3>Email</h3>
      <p>gonzaloapr45@gmail.com</p>
    </div>
  );
}
