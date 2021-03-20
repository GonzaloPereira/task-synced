import React, { useState } from 'react';
import './Teams.css';
import TeamTitle from './TeamTitle';
import TeamLink from './TeamLink';

function TeamNav({ teams, selectTeam }) {
  return (
    <div className="team-nav">
      <TeamTitle />
      {teams.map((team, idx) => (
        <>
          {idx !== 0 && <hr className="separator-lines" />}
          <TeamLink key={team.name} name={team.name} selectTeam={selectTeam} />
        </>
      ))}
    </div>
  );
}
export default TeamNav;
