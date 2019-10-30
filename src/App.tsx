import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './components/fragments/ErrorBoudary';
import { Login } from './components/Pages/Login';
import { Main } from './components/Main';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <BrowserRouter>
          <Switch>
            <Route key="login" exact={true} path="/login" component={Login} />
            <Route key="main" component={Main} />
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default App;
