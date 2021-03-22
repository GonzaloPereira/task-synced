import React, { useState } from 'react';
import './Teams.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Task from './Task';

function TeamDescription({ currTeam }) {
  if (!currTeam)
    return (
      <div className="team-content">
        <h2>Select a team!</h2>
      </div>
    );
  const { name, description, members } = currTeam;
  const [tasks, setTasks] = useState([
    {
      name: 'Task name 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit et nunc sed aliquet. Ut a quam non odio pellentesque tincidunt. Pellentesque lacinia lectus sed sem tempor, ut aliquet purus ullamcorper. Curabitur sed tellus blandit, facilisis libero ac, dapibus ante. Etiam vitae augue nunc. Nullam posuere, dolor sit amet bibendum auctor, velit mauris lacinia tortor, vitae euismod velit diam nec odio. Aenean ultricies tempus enim. Aenean molestie nunc ac accumsan convallis. In ante turpis, semper ut enim ut, aliquet congue arcu. Proin posuere porttitor quam, sed sodales turpis commodo et. Donec eu semper orci. Donec in consequat diam. Nunc hendrer',
      date: new Date().toLocaleDateString(),
    },
    {
      name: 'Task name 2',
      description:
        'Lorem ipsum dolor sit amet, quet. Ut a quam non odio pellenesque lacinia lectus sed sem tempor, ut aliquet purus ullamcorper. Curabitur sed tellus blandit, facilisis libero ac, dapibus ante. Etiam vitae augue nunc. Nullam posuere, dolor sit amet bibendum auctor, velit mauris lacinia tortor, vitae euismod velit diam nec odio. Aenean ultricies tempus enim. Aenean molestie nunc ac accumsan convallis. In ante turpis, semper ut enim ut, aliquet congue arcu. Proin posuere porttitor quam, sed sodales turpis commodo et. Donec eu semper orci. Donec in consequat diam. Nunc hendrer',
      date: new Date().toLocaleDateString(),
    },
  ]);
  return (
    <div className="team-content">
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Tasks</h3>
      <div className="tasks-container">
        {tasks.map((task, idx) => (
          <div key={task.name}>
            {idx !== 0 && <hr className="tasks-separator-line" />}
            <Task task={task} />
          </div>
        ))}
      </div>
      <div className="add-task">
        <AddCircleOutlineIcon style={{ color: '00adb5' }} />
        <h5>Add new task</h5>
      </div>
    </div>
  );
}
export default TeamDescription;
