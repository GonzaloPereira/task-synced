import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Notification({ not }) {
  return (
    <div className="notification">
      <CheckCircleIcon fontSize="inherit" />
      <p>{not}</p>
    </div>
  );
}
