import React, { useRef, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const email = useRef('');
  const password = useRef('');
  return (
    <div className="auth">
      <h2>Log In</h2>
      <form>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" value={email.current} id="email" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" value={password.current} id="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
