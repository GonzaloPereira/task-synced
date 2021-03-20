import React, { useRef, useState, useEffect } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
  const email = useRef('');
  const password = useRef('');
  const passwordConfirm = useRef('');
  const { signup, refreshUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const mounted = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.current.value !== passwordConfirm.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      const res = await signup(email.current.value, password.current.value);
      if (!res.ok) throw new Error();
      await refreshUser();
    } catch (err) {
      setError('Failed to create an account');
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email" id="email" ref={email} />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" ref={password} id="password" />
        </label>
        <label htmlFor="passwordConfirm">
          <p>Confirm password</p>
          <input type="password" ref={passwordConfirm} id="passwordConfirm" />
        </label>
        <button disabled={loading} type="submit">
          Sign Up
        </button>
        <p>
          Already have and account?{' '}
          <Link to="/login" style={{ color: '#00adb5' }}>
            Log In
          </Link>
        </p>
      </form>
      {error && <p>An error happened!!{error}</p>}
    </div>
  );
}
