/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Typography } from '@material-ui/core';

import avatar from '../img/avatar.jpg';
import opponent from '../img/merlin.png';

import Editor from '../components/Editor';
import CompareHeader from '../components/CompareHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    height: '50px',
    borderRight: '1px solid #D0D0D0',
    borderLeft: '1px solid #D0D0D0',
    color: theme.palette.text.secondary,
    marginBottom: '20px',
  },
}));

export default () => {
  const classes = useStyles();

  const userCode = `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */

  const twoSum = function(nums, target) {
    const values = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      const targetSubtract = target - nums[i];
      const matchingValue = values.get(targetSubtract);
      if (matchingValue !== undefined) {
        return [matchingValue, i];
      }
      values.set(nums[i], i);
    }
  }`;

  const opponentCode = `/**
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */

  const twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const another = target - nums[i];
      if (another in map) {
        return [map[another], i];
      }
      map[nums[i]] = i;
    }
    return null;
  };`;

  return (
    <Grid className={classes.root} container spacing={0}>
      <Grid item xs={6}>
        <Paper square className={classes.paper}>
          <CompareHeader name="Jeffrey Yu" time="15:17 🏆" avatar={avatar}/>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper square className={classes.paper}>
          <CompareHeader name="Merlin" time="18:33" avatar={opponent}/>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
          <SyntaxHighlighter style={github}>
            {userCode}
          </SyntaxHighlighter>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6">
          <SyntaxHighlighter style={github}>
            {opponentCode}
          </SyntaxHighlighter>
        </Typography>
      </Grid>
    </Grid>
  );
};
