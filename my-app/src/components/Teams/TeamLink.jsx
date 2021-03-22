import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TeamLink({ team, selectTeam }) {
  return (
    <div
      className="team-link"
      onClick={() => {
        selectTeam(team.id);
      }}
    >
      <AccountCircleIcon className="team-icon" />
      <h4>
        {team.name.substring(0, 18) + (team.name.length > 18 ? '...' : '')}
      </h4>
    </div>
  );
}
export default TeamLink;
