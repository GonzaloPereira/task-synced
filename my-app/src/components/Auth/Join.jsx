import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

export default function Join() {
  return (
    <div className="join form">
      <h1>Join the community!</h1>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <button type="button">Log In</button>
      </Link>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <button type="button">Sign up</button>
      </Link>
    </div>
  );
}
