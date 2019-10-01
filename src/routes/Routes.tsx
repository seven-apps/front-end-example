import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  Login,
} from 'modules/Auth/screens';


export const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </HashRouter>
)