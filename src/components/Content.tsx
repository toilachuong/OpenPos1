import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Menu, Dashboard } from './Pages';

export const Content = (): JSX.Element => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route path="/menus" component={Menu} />
    </Switch>
  );
};
