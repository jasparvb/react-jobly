import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home loggedIn={loggedIn} />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route path="/companies/:handle">
        <Company />
      </Route>
      <Route exact path="/jobs">
        <Jobs jobs={jobs} />
      </Route>
      <Route exact path="/login">
        <Login companies={jobs} />
      </Route>
      <Route exact path="/profile">
        <Profile companies={jobs} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;