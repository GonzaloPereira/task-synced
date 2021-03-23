import React, { useState, useReducer } from 'react';
import './Teams.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TaskContainer from '../Task/TaskContainer';
import Task from '../Task/Task';
import AddTask from '../Task/AddTask';
import MembersContainer from './Member/MembersContainer';
import AddMember from './Member/AddMember';
import { addMember } from '../../request/teams';

function TeamDescription({ currTeam, selectTeam }) {
  if (!currTeam)
    return (
      <div className="team-content">
        <h2>Select a team!</h2>
      </div>
    );
  const { name, description, tasks, members } = currTeam;
  const [showAddTask, toggleShowAddTask] = useReducer((st) => !st, false);
  const [showAddMember, toggleShowAddMember] = useReducer((st) => !st, false);

  function refreshTeam() {
    selectTeam(currTeam._id);
  }
  return (
    <div className="team-content">
      <h3>{name}</h3>
      <div className="team-description">
        <p>{description}</p>
      </div>

      <h3>Tasks</h3>
      <TaskContainer
        tasks={tasks}
        teamId={currTeam._id}
        refreshTeam={refreshTeam}
        editable
      />
      <div
        className="add-task"
        onClick={toggleShowAddTask}
        style={tasks && tasks.length ? {} : { borderRadius: '5px' }}
      >
        <AddCircleOutlineIcon style={{ color: '00adb5' }} />
        <h5>Add new task</h5>
      </div>

      <h3>Members</h3>
      <MembersContainer
        members={members}
        teamId={currTeam._id}
        refreshTeam={refreshTeam}
      />
      <div
        className="add-member"
        onClick={toggleShowAddMember}
        style={members && members.length ? {} : { borderRadius: '5px' }}
      >
        <AddCircleOutlineIcon style={{ color: '00adb5' }} />
        <h5>Add new member</h5>
      </div>

      {showAddTask && (
        <AddTask
          close={toggleShowAddTask}
          currTeam={currTeam}
          refreshTeam={refreshTeam}
        />
      )}

      {showAddMember && (
        <AddMember
          close={toggleShowAddMember}
          currTeam={currTeam}
          refreshTeam={refreshTeam}
        />
      )}
    </div>
  );
}
export default TeamDescription;
