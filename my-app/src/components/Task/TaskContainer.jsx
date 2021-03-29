import React from 'react';
import Task from './Task';
import { deleteTaskForTeam } from '../../request/teams';
import { useAuth } from '../contexts/AuthContext';

export default function TaskContainer({
  tasks,
  style,
  teamId,
  refreshTeam,
  editable,
  userIsAdmin,
}) {
  const { refreshUser } = useAuth();
  async function deleteTask(taskId) {
    try {
      await deleteTaskForTeam(teamId, taskId);
      await refreshUser();
      await refreshTeam();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="tasks-container" style={style}>
      {tasks.map((task, idx) => (
        <div key={task._id}>
          {idx !== 0 && <hr className="dark-separator-line" />}
          <Task
            task={task}
            userIsAdmin={userIsAdmin}
            deleteTask={deleteTask}
            editable={editable}
          />
        </div>
      ))}
    </div>
  );
}
