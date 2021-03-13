import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function TeamAdd() {
  return (
    <div className="team-add">
      <div className="team-add-row">
        <AddIcon fontSize="inherit" style={{ color: '00adb5' }} />
        <p>Join a team</p>
      </div>
      <div className="team-add-row">
        <AddIcon fontSize="inherit" style={{ color: '00adb5' }} />
        <p>Create a new team</p>
      </div>
    </div>
  );
}

export default TeamAdd;
