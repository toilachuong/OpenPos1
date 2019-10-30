import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MenuDetail } from './Detail';
import { MenuList } from './List';

export const Menu = (props: any): JSX.Element => {
  return (
    <React.Fragment>
      <Switch>
        <Route key="list" exact={true} path={`/menus`} component={MenuList} />
        <Route
          key="detail"
          exact={true}
          path={`/menus/:id`}
          component={MenuDetail}
        />
      </Switch>
    </React.Fragment>
  );
};
