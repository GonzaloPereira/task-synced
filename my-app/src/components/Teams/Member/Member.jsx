import React, { useState, useEffect, useReducer, useRef } from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import PersonIcon from '@material-ui/icons/Person';
import RestoreIcon from '@material-ui/icons/Restore';

export default function Member({ member, deleteMember }) {
  const { id: memberId, name } = member;
  const [isDeleted, toggleIsDeleted] = useReducer((st) => !st, false);

  const timeoutId = useRef('');
  const intervalId = useRef('');
  const [opacity, setOpacity] = useState(1);
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, []);

  function cancelDelete() {
    clearTimeout(timeoutId.current);
    clearInterval(intervalId.current);
    setOpacity(1);
  }

  function callForDelete() {
    intervalId.current = setInterval(() => {
      setOpacity((prevOpacity) => prevOpacity - 0.025);
    }, 50);
    timeoutId.current = setTimeout(() => {
      deleteMember(memberId);
    }, 2000);
  }

  return (
    <div className="member" style={{ opacity }}>
      <PersonIcon />
      <h4>{name}</h4>
      {isDeleted ? (
        <RestoreIcon
          className="task-button"
          style={{ color: 'e84545' }}
          onClick={async (e) => {
            toggleIsDeleted();
            cancelDelete();
          }}
        />
      ) : (
        <RemoveCircleOutlineIcon
          className="member-button"
          style={{ color: 'e84545' }}
          onClick={() => {
            toggleIsDeleted();
            callForDelete(memberId);
          }}
        />
      )}
    </div>
  );
}
