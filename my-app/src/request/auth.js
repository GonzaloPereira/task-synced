export async function createUserWithEmailAndPassword(email, password) {
  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: email, password }),
  };
  return fetch('/api/register', data);
}

export async function loginInWithEmailAndPassword(email, password) {
  const data = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: email, password }),
  };
  return fetch('/api/login', data);
}

export async function logOut() {
  return fetch('/api/logout');
}

export async function getUser() {
  return fetch('/api/isAuthenticated').then((res) => res.json());
}
