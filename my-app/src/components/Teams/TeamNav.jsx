import React, { useState, useReducer } from 'react';
import './Teams.css';
import TeamTitle from './TeamTitle';
import TeamLink from './TeamLink';

function TeamNav({ teams, selectTeam, style }) {
  return (
    <div className="team-nav" style={style}>
      <TeamTitle />
      {teams.map((team, idx) => (
        <div key={team.id}>
          {idx !== 0 && <hr className="teams-separator-line" />}
          <TeamLink team={team} selectTeam={selectTeam} />
        </div>
      ))}
    </div>
  );
}
export default TeamNav;
