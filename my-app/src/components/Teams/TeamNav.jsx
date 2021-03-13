import React, { useState } from 'react';
import './Teams.css';
import TeamTitle from './TeamTitle';
import TeamLink from './TeamLink';

function TeamNav({ teams }) {
  return (
    <div className="team-nav">
      <TeamTitle />
      {teams.map((team) => (
        <TeamLink key={team.name} name={team.name} />
      ))}
    </div>
  );
}
export default TeamNav;
