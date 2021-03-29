import React, { useState, useEffect, useReducer, useRef } from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PersonIcon from '@material-ui/icons/Person';
import RestoreIcon from '@material-ui/icons/Restore';
import { toggleAdmin } from '../../../request/teams';

export default function Member({
  teamId,
  member,
  deleteMember,
  userIsAdmin,
  refreshTeam,
  numAdmins,
}) {
  const { _id: memberId, name, isAdmin: memberIsAdmin } = member;
  const [isDeleted, toggleIsDeleted] = useReducer((st) => !st, false);
  const [showAdminStatus, toggleShowAdminStatus] = useReducer(
    (st) => !st,
    false,
  );
  const [showErrorAdminStatus, setShowErrorAdminStatus] = useState(false);

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
  const errTimeoutId = useRef('');
  function errHandleAdminStatusChange() {
    setShowErrorAdminStatus(true);
    errTimeoutId.current = setTimeout(() => {
      setShowErrorAdminStatus(false);
    }, 2000);
  }
  // eslint-disable-next-line arrow-body-style
  useEffect(() => {
    return () => {
      clearTimeout(errTimeoutId.current);
    };
  }, []);
  function handleAdminStatusChange() {
    toggleShowAdminStatus();
    if (numAdmins === 1 && memberIsAdmin) {
      errHandleAdminStatusChange();
      return;
    }
    toggleAdmin(teamId, memberId);
    refreshTeam();
  }
  return (
    <div className="member" style={{ opacity }}>
      <PersonIcon />
      <h4>{name}</h4>
      <h6 className="admin-name" onClick={toggleShowAdminStatus}>
        {memberIsAdmin ? 'Admin' : 'Member'}
      </h6>
      {showAdminStatus && userIsAdmin && (
        <div className="admin-status" onClick={handleAdminStatusChange}>
          <h6>{memberIsAdmin ? 'Set user to member' : 'Set user to admin'}</h6>
        </div>
      )}
      {showErrorAdminStatus && (
        <div className="admin-status">
          <ErrorOutlineIcon className="red" />
          <h6>Team needs at least one admin</h6>
        </div>
      )}
      {userIsAdmin && (
        <>
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
        </>
      )}
    </div>
  );
}
