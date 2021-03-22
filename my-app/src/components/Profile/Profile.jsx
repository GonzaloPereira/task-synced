import React from 'react';
import './Profile.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { logout, currentUser } = useAuth();
  const { name, username: email } = currentUser;
  function handleLogout() {
    logout();
  }
  return (
    <div className="profile">
      <h2>My Profile</h2>
      <div className="profile-pic">
        <AccountCircleIcon fontSize="inherit" />
      </div>
      <h3>Name</h3>
      <p>{name}</p>
      <h3>Email</h3>
      <p>{email}</p>
      <button className="logout-button" type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
