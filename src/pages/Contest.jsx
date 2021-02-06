import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Editor from '../components/Editor';

import Problem from '../components/Problem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    height: '100%',
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={0}>
      <Grid item xs={3}>
        <Paper variant="outlined" square className={classes.paper}>
          <Problem />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Editor />
      </Grid>
      <Grid item xs={3}>
        <Paper variant="outlined" square className={classes.paper}>
          Status
        </Paper>
      </Grid>
    </Grid>
  );
};
