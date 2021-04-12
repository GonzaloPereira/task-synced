import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Popup from '../extra/Popup';
import { useAuth } from '../contexts/AuthContext';
import { removeMember } from '../../request/teams';

export default function LeaveTeam({ close, currTeam }) {
  const { currentUser, refreshUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const mounted = useRef(false);

  async function handleSubmit() {
    try {
      setError('');
      setLoading(true);
      // Delete team with teamId : currTeam._id
      const res = removeMember(currTeam._id, currentUser._id);
      if (!res.ok) throw new Error();
      await close();
      await refreshUser();
    } catch (err) {
      setError('Failed to leave team');
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
    <Popup close={close}>
      <form onSubmit={handleSubmit}>
        <h3>{`Leave "${currTeam.name}"?`}</h3>
        <p>All tasks will be deleted for you</p>
        <Button
          variant="outlined"
          color="secondary"
          className="red-submit-button"
          type="submit"
        >
          Yes, leave team
        </Button>
      </form>
    </Popup>
  );
}
