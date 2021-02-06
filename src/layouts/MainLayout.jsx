import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/Header';
import Footer from '../components/Footer';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
