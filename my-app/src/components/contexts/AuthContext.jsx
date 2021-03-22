import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  createUserWithEmailAndPassword,
  loginInWithEmailAndPassword,
  logOut,
  getUser,
} from '../../request/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const mounted = useRef(false);

  async function refreshUser() {
    const user = await getUser();
    setCurrentUser(user);
    setLoading(false);
  }

  function signup(email, password, name) {
    return createUserWithEmailAndPassword(email, password, name).then(() =>
      refreshUser(),
    );
  }

  function login(email, password) {
    return loginInWithEmailAndPassword(email, password).then(() =>
      refreshUser(),
    );
  }

  function logout() {
    return logOut().then(() => refreshUser());
  }

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });

  // Get current user (Get the state of the user, if it is login or not)
  useEffect(async () => {
    if (mounted.current) {
      await refreshUser();
    }
    // logout when component is unmounted
    function unsubscribe() {
      setCurrentUser(null);
    }
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    refreshUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
