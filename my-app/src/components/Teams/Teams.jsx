import React, { useState, useEffect } from 'react';
import TeamNav from './TeamNav';
import TeamDescription from './TeamDescription';
import { useAuth } from '../contexts/AuthContext';
import { getTeam } from '../../request/teams';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [currTeam, setCurrTeam] = useState();

  const { currentUser } = useAuth();

  useEffect(() => {
    const { teams: listTeams } = currentUser;
    setTeams(listTeams);
  }, [currentUser]);
  // Change this
  async function selectTeam(teamId) {
    // Call function that will get the team with id = teamId
    const resTeam = await getTeam(teamId);
    setCurrTeam(resTeam);
  }
  return (
    <div className="teams-container">
      <TeamNav teams={teams} selectTeam={selectTeam} />
      <TeamDescription currTeam={currTeam} selectTeam={selectTeam} />
    </div>
  );
}

export default Teams;
