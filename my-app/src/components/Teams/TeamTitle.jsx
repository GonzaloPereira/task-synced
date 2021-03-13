import React, { useReducer } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TeamAdd from './TeamAdd';

function TeamTitle() {
  const [showTeamAdd, toggleShowTeamAdd] = useReducer((state) => !state, false);
  return (
    <div className="team-title">
      <h3>My teams</h3>
      <AddCircleOutlineIcon onClick={toggleShowTeamAdd} className="add-icon" />
      {showTeamAdd && <TeamAdd />}
    </div>
  );
}
export default TeamTitle;
