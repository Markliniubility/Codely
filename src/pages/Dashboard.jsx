/* eslint-disable */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LeaderBoard from '../components/LeaderBoard';
import Friends from '../components/Friends';
import Match from '../components/Match';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%',
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper variant="outlined" square className={classes.paper}>
            <Match />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper variant="outlined" square className={classes.paper}>
            <Friends />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined" square className={classes.paper}>
            <LeaderBoard />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
