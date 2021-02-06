import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Contest from './pages/Contest';

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/contest">
          <Contest />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
