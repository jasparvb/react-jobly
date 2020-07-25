import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';

function Routes({companies, jobs}) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <Companies companies={companies} />
      </Route>
      <Route path="/companies/:company">
        <Company companies={companies} />
      </Route>
      <Route exact path="/jobs">
        <Jobs companies={jobs} />
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