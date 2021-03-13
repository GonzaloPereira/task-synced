import React from 'react';
import './Teams.css';

function TeamDescription() {
  return (
    <div className="team-desc">
      <h3>Tasks</h3>
      <ul>
        <li>first task</li>
        <li>second task</li>
      </ul>
      <h3>Admins</h3>
      <ul>
        <li>first admin</li>
        <li>second admin</li>
      </ul>
      <h3>Members</h3>
      <ul>
        <li>first member</li>
        <li>second member</li>
      </ul>
    </div>
  );
}
export default TeamDescription;
