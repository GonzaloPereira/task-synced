import React, { useState, useReducer } from 'react';
import './Task.css';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckIcon from '@material-ui/icons/Check';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

export default function Task({ task }) {
  const { name, description, date } = task;
  const [dropDescrip, setDropDescrip] = useReducer((st) => !st, false);
  const [showArrow, setShowArrow] = useState(false);
  const [isDone, toggleIsDone] = useReducer((st) => !st, false);
  return (
    <div
      className="task"
      onMouseOver={() => setShowArrow(true)}
      onMouseOut={() => setShowArrow(false)}
      onClick={() => setDropDescrip(true)}
    >
      {showArrow || dropDescrip ? (
        <>{dropDescrip ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </>
      ) : (
        <>
          {isDone ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}{' '}
        </>
      )}
      <h4>{name}</h4>
      <CalendarTodayIcon />
      <h5>{date}</h5>
      {!isDone ? (
        <CheckIcon
          className="task-button"
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            toggleIsDone();
          }}
          style={{ color: '00adb5' }}
        />
      ) : (
        <CloseIcon
          className="task-button"
          onMouseOver={(e) => e.stopPropagation()}
          onMouseOut={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            toggleIsDone();
          }}
          style={{ color: 'e84545' }}
        />
      )}
      <DeleteIcon
        className="task-button"
        onMouseOver={(e) => e.stopPropagation()}
        onMouseOut={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        style={{ color: 'e84545' }}
      />
      {dropDescrip && <div className="task-description">{description}</div>}
    </div>
  );
}
