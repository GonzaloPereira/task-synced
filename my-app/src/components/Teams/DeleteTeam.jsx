import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Popup from '../extra/Popup';
import { deleteTeam } from '../../request/teams';

export default function DeleteTeam({ close, currTeam, resetTeams }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const mounted = useRef(false);

  async function handleSubmit() {
    try {
      setError('');
      setLoading(true);
      // Delete team with teamId : currTeam._id
      const res = deleteTeam(currTeam._id);
      if (!res.ok) throw new Error();
      await close();
      await resetTeams();
    } catch (err) {
      setError('Failed to delete team');
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
        <h3>{`Delete "${currTeam.name}"?`}</h3>
        <p>All the tasks will be deleted for all members.</p>
        <Button
          variant="outlined"
          color="secondary"
          className="red-submit-button"
          type="submit"
        >
          Yes, delete team
        </Button>
      </form>
    </Popup>
  );
}
