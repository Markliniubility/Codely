import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Contest from './pages/Contest';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#212529',
      dark: '#212529',
    },
    secondary: {
      main: '#212529',
      dark: '#212529',
    },
  },
});

const App = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
