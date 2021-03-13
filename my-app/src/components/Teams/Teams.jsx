import React, { useState } from 'react';
import TeamNav from './TeamNav';
import TeamDescription from './TeamDescription';

function Teams() {
  const [teams, setTeams] = useState([
    { name: 'Los backyardigans' },
    { name: 'Los paisanos' },
    { name: 'Los backyardigans' },
    { name: 'Los paisanos' },
  ]);
  return (
    <div className="teams-container">
      <TeamNav teams={teams} />
      <TeamDescription />
    </div>
  );
}
export default Teams;
