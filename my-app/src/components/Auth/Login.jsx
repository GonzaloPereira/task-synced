/* eslint-disable react/jsx-curly-brace-presence */
import './Auth.css';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { login, refreshUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const mounted = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email.current.value, password.current.value);
      await refreshUser();
    } catch {
      setError('Failed to log in');
    }
    if (mounted.current) {
      setLoading(false);
    }
  }
  useEffect(() => {
    function unmount() {
      mounted.current = false;
    }
    return unmount;
  }, []);
  return (
    <div className="auth">
      {loading && <h2>Is loading...</h2>}
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
      {error && <p>An error happened!!{error}</p>}
    </div>
  );
}
