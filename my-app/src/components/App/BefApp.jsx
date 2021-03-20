import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';
import Join from '../Auth/Join';
import App from './App';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import { AuthProvider } from '../contexts/AuthContext';

export default function BefApp() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PublicRoute restricted path="/login" component={Login} exact />
          <PublicRoute restricted path="/signup" component={Signup} exact />
          <PublicRoute restricted path="/join" component={Join} exact />
          <PrivateRoute path="/home" component={App} />
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}
