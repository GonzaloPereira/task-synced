import React, { useState } from 'react';
import TeamNav from './TeamNav';
import TeamDescription from './TeamDescription';

function Teams() {
  const [teams, setTeams] = useState([
    { name: 'Los backyardigans' },
    { name: 'Los paisanos' },
  ]);
  const [currTeam, setCurrTeam] = useState();
  function selectTeam(team) {
    setCurrTeam(team);
  }
  return (
    <div className="teams-container">
      <TeamNav teams={teams} selectTeam={selectTeam} />
      <TeamDescription name={currTeam} />
    </div>
  );
}

export default Teams;
