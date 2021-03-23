export async function getTeam(teamId) {
  return fetch(`/api/teams/${teamId}`).then((res) => res.json());
}
export async function addMember(teamId, user) {
  const team = await getTeam(teamId);
  if (team.members.find((member) => String(member.id) === user._id))
    throw new Error('Member already in team');
  return fetch(`/api/teams/${teamId}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: user._id, name: user.name }),
  });
}
export async function removeMember(teamId, userId) {
  return fetch(`/api/teams/${teamId}/members/${userId}`, {
    method: 'DELETE',
  });
}
export async function createTeam(team, user) {
  const { _id: teamId } = await fetch('/api/teams', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team),
  }).then((res) => res.json());
  return addMember(teamId, user);
}
export async function createTaskForTeam(teamId, task) {
  return fetch(`/api/teams/${teamId}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
}

export async function deleteTaskForTeam(teamId, taskId) {
  return fetch(`/api/teams/${teamId}/tasks/${taskId}`, {
    method: 'DELETE',
  });
}
