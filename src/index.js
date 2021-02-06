/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Problem from './components/Problem';
import './static/index.css'

const THEME = createMuiTheme({
    typography: {
        "fontFamily": `Titillium Web`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 600
    },
    props: {
        MuiTypography: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
 });

const App = () => {
    <ThemeProvider theme={THEME}>
        <Problem />
    </ThemeProvider>
};

ReactDOM.render(<App />, document.getElementById('root'));
