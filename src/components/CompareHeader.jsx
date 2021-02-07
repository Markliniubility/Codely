/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   userResult: {
//     display: "inline-block",
//   },
//   avatar: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
//   name: {
//     float: 'left',
//     marginRight: '10px',
//   },
//   time: {
//     float: 'right'
//   }
// }));

export default (props) => {
  // const classes = useStyles();
  return (
    <div>
      <div>
        <Avatar style={{'float': 'left', 'margin-right': '10px'}} src={props.avatar} />
        <Typography variant="h5" style={{'float': 'right', 'padding-top': '5px'}}> {props.name} </Typography>
      </div>
      <Typography variant="h6" paragraph>Score: {props.score} </Typography>
      <Typography variant="body1">Runtime (50%): {props.runtime} </Typography>
      <Typography variant="body1">Time used (30%): {props.time} </Typography>
      <Typography variant="body1">Memory Distribution (20%): {props.memory} </Typography>
    </div>
  );
};
