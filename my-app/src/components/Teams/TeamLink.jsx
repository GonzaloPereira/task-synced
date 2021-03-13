import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TeamLink({ name, selectTeam }) {
  return (
    <div
      className="team-link"
      onClick={() => {
        selectTeam(name);
      }}
    >
      <AccountCircleIcon className="team-icon" />
      <h4>{name}</h4>
    </div>
  );
}
export default TeamLink;
