/* eslint-disable react/jsx-curly-brace-presence */
import './Auth.css';
import React, { useRef, useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const mounted = useRef(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      const res = await login(email.current.value, password.current.value);
      if (!res.ok) throw new Error();
    } catch {
      setError('Failed to log in');
    }
    if (mounted.current) {
      setLoading(false);
    }
  }
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });

  return (
    <div className="form">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" ref={email} id="email" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" ref={password} id="password" />
        </label>
        <button type="submit">Log In</button>
        <p>
          {"Don't have and account yet?"}{' '}
          <Link to="/signup" style={{ color: '#00adb5' }}>
            Sign up
          </Link>
        </p>
      </form>
      {loading && <LinearProgress style={{ backgroundColor: '#0000' }} />}
      {error && <Alert severity="error">Failed to login!</Alert>}
    </div>
  );
}