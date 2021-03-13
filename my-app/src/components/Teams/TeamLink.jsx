import React from 'react';
import GroupIcon from '@material-ui/icons/Group';

function TeamLink({ name }) {
  return (
    <div className="team-link">
      <p>
        <GroupIcon />
        {name}
      </p>
    </div>
  );
}
export default TeamLink;
