import React, { useState, useReducer, useRef, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import { createTeam } from '../../request/teams';
import { useAuth } from '../contexts/AuthContext';

function formReducer(state, event) {
  return {
    ...state,
    [event.name]: event.value,
  };
}
export default function CreateTeam({ close }) {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser, refreshUser } = useAuth();
  const mounted = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      // create team and add user to team
      const res = await createTeam(formData, currentUser);
      if (!res.ok) throw new Error();
      await close();
      await refreshUser();
    } catch (err) {
      setError("Couldn't create team");
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
  function handleChange(event) {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return (
    <div className="popup-out" onClick={close}>
      <div className="popup-in form" onClick={(e) => e.stopPropagation()}>
        <CloseIcon className="popup-close-icon" onClick={close} />

        <h2>Create a new Team!</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            <p>Name</p>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            <p>Description</p>
            <textarea
              type="text"
              id="description"
              name="description"
              value={formData.description || ''}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create</button>
        </form>
        <br />
        {loading && <LinearProgress style={{ backgroundColor: '#0000' }} />}
        {error && <Alert severity="error">Failed to create a new team!</Alert>}
      </div>
    </div>
  );
}
