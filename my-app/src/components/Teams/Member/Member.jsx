import React, { useState, useReducer } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';

export default function Member({ member, deleteMember }) {
  const { id: memberId, name } = member;
  return (
    <div className="member">
      <PersonIcon />
      <h4>{name}</h4>
      <DeleteIcon
        className="member-button"
        style={{ color: 'e84545' }}
        onClick={() => {
          deleteMember(memberId);
        }}
      />
    </div>
  );
}
