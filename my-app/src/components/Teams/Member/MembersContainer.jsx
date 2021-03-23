import React from 'react';
import Member from './Member';
import './Member.css';
import { removeMember } from '../../../request/teams';
import { useAuth } from '../../contexts/AuthContext';

export default function MembersContainer({ members, teamId, refreshTeam }) {
  const { refreshUser } = useAuth();
  async function deleteMember(userId) {
    try {
      await removeMember(teamId, userId);
      await refreshUser();
      await refreshTeam();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="members-container">
      {members.map((member, idx) => (
        <div key={member._id}>
          {idx !== 0 && <hr className="dark-separator-line" />}
          <Member member={member} deleteMember={deleteMember} />
        </div>
      ))}
    </div>
  );
}
