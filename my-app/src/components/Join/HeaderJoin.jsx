import React, { useReducer } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../Header/Header.css';

export default function HeaderJoin() {
  const { url } = useRouteMatch();
  return (
    <>
      <div className="header-join">
        <h1 className="links">Task Synced</h1>
        <Link to="/login" className="login-link links material-ui-link">
          <h2>Log in</h2>
        </Link>
        <Link to="/signup" className="singup-link links material-ui-link">
          <h2>Sign up</h2>
        </Link>
      </div>
    </>
  );
}
