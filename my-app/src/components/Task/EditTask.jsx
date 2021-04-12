import React, { useState, useReducer, useRef, useEffect } from 'react';
import moment from 'moment';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import { editTaskForTeam } from '../../request/teams';
import Popup from '../extra/Popup';
import { useAuth } from '../contexts/AuthContext';

function formReducer(state, event) {
  return {
    ...state,
    [event.name]: event.value,
  };
}
export default function EditTask({ close, teamId, refreshTeam, taskId }) {
  const [formData, setFormData] = useReducer(formReducer, {
    changeDate: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { refreshUser } = useAuth();
  const mounted = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.name && formData.name.length > 50) {
      return setError('Name too long');
    }
    try {
      setError('');
      setLoading(true);

      // create task and give teamId
      const task = {
        ...formData,
        date: formData.date ? moment(formData.date).toISOString() : '',
      };
      if (!task.changeDate) delete task.date;
      delete task.changeDate;
      const res = await editTaskForTeam(teamId, taskId, task);
      if (!res.ok) throw new Error();
      await close();
      await refreshTeam();
      await refreshUser();
    } catch (err) {
      setError('Failed to edit task');
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
      value:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  }
  return (
    <Popup close={close}>
      <h2>Edit Task</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            placeholder="Leave blank for no changes"
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
            placeholder="Leave blank for no changes"
          />
        </label>
        <label htmlFor="date">
          <p>Expected date</p>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={formData.date || ''}
            onChange={handleChange}
            min="2020-01-01"
            max="2022-01-01"
          />
        </label>
        <label htmlFor="changeDate">
          <p style={{ display: 'inline-block' }}>Change date</p>
          <input
            type="checkbox"
            id="changeDate"
            name="changeDate"
            value={formData.changeDate || ''}
            onChange={handleChange}
            min="2020-01-01"
            max="2022-01-01"
          />
        </label>
        <button className="blue-submit-button" type="submit">
          Edit task
        </button>
      </form>
      <br />
      {loading && <LinearProgress style={{ backgroundColor: '#0000' }} />}
      {error && <Alert severity="error">{error}</Alert>}
    </Popup>
  );
}