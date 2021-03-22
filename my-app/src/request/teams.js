export async function getTeam(teamId) {
  return fetch(`/api/teams/${teamId}`).then((res) => res.json());
}
export async function addMember(teamId, user) {
  return fetch(`/api/teams/${teamId}/members`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: user._id, name: user.name }),
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
