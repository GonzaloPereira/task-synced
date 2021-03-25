import React, { useState, useReducer, useEffect } from 'react';
import './Task.css';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CheckIcon from '@material-ui/icons/Check';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import useWindowDimensions from '../extra/WindowDimensions';

export default function Task({ task, editable, deleteTask }) {
  const { _id: taskId, name, description, date } = task;
  const [dropDescrip, setDropDescrip] = useReducer((st) => !st, false);
  const [showArrow, setShowArrow] = useState(false);
  const [isDone, toggleIsDone] = useReducer((st) => !st, false);
  const { width } = useWindowDimensions();
  const [responsiveStyle, setResponsiveStyle] = useState();
  const showOptions =
    (editable && width > 700) || (width <= 700 && dropDescrip && editable);
  // useEffect(() => {
  //   if (width <= 700) {
  //     setResponsiveStyle({
  //       gridTemplateColumns: showOptions
  //         ? '50px 5fr 30px 30px'
  //         : '50px 5fr 30px minmax(120px,1fr)',
  //       gridTemplateRows: showOptions
  //         ? 'minmax(2.5rem, auto) 2rem  auto'
  //         : 'minmax(2.5rem, auto) auto',
  //     });
  //   } else {
  //     setResponsiveStyle({
  //       gridTemplateColumns: editable
  //         ? '50px 5fr 50px 1fr 50px 50px'
  //         : '50px 5fr 50px 1fr',
  //     });
  //   }
  // }, [width, showOptions]);

  useEffect(() => {
    if (!editable) {
      setResponsiveStyle({
        gridTemplateColumns: '50px 5fr 30px minmax(120px,1fr)',
      });
    } else {
      // eslint-disable-next-line no-lonely-if
      if (width <= 700) {
        setResponsiveStyle({
          gridTemplateColumns: dropDescrip
            ? '50px 5fr 30px 30px'
            : '50px 5fr 30px minmax(120px,1fr)',
          gridTemplateRows: dropDescrip
            ? 'minmax(2.5rem, auto) 2rem  auto'
            : 'minmax(2.5rem, auto) auto',
        });
      } else {
        setResponsiveStyle({
          gridTemplateColumns: '50px 5fr 50px 1fr 50px 50px',
          gridTemplateRows: 'minmax(2.5rem, auto) auto',
        });
      }
    }
  }, [width, dropDescrip]);
  return (
    <div
      className="task"
      onMouseOver={() => setShowArrow(true)}
      onMouseOut={() => setShowArrow(false)}
      onClick={() => setDropDescrip(true)}
      style={responsiveStyle}
    >
      {showArrow || dropDescrip ? (
        <>{dropDescrip ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} </>
      ) : (
        <>
          {isDone ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}{' '}
        </>
      )}
      <h4
        style={{
          gridColumn: dropDescrip && editable && width <= 700 ? '2/7' : '2/3',
        }}
      >
        {name}
      </h4>
      <CalendarTodayIcon />
      <h5>
        {date
          ? new Date(
              date.substring(0, 4),
              date.substring(5, 7),
              date.substring(8, 10),
            ).toLocaleDateString('es-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
            })
          : ''}
      </h5>
      {showOptions && (
        <>
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
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(taskId);
            }}
            style={{ color: 'e84545' }}
          />
        </>
      )}
      {dropDescrip && <div className="task-description">{description}</div>}
    </div>
  );
}
