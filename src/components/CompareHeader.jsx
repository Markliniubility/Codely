/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'absolute',
    height: '150px',
  },
  userResult: {
    top: '0px',
    left: '0px',
  },
  opponentResult: {
    top: '0px',
    right: '0px',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.userResult}>
        <Avatar className={classes.large} src={props.avatar} />
        <Typography variant="h4"> {props.name} </Typography>
        <Typography variant="h6">Time used: {props.time} </Typography>
      </div>
    </div>
  );
};
