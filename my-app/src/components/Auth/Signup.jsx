import React, { useRef, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import './Auth.css';

export default function Signup() {
  const email = useRef('');
  const password = useRef('');
  const passwordConfirm = useRef('');
  return (
    <div className="auth">
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" value={email.current} id="email" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" value={password.current} id="password" />
        </label>
        <label htmlFor="passwordConfirm">
          <p>Confirm password</p>
          <input
            type="password"
            value={passwordConfirm.current}
            id="passwordConfirm"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
