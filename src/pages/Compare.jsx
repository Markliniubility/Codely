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

import CompareHeader from '../components/CompareHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    height: '150px',
    borderRight: '1px solid #D0D0D0',
    borderLeft: '1px solid #D0D0D0',
    color: theme.palette.text.secondary,
    backgroundColor: '#303030',
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
      <Grid item xs={6} style={{'height': '150px'}}>
        <Paper square className={classes.paper}>
          <CompareHeader name="Jeffrey Yu" score="93 🏆" runtime="37ms" time="15:17" memory="14239kb" avatar={avatar}/>
        </Paper>
      </Grid>
      <Grid item xs={6} style={{'height': '150px'}}>
        <Paper square className={classes.paper}>
          <CompareHeader name="Merlin" score="86" runtime="42ms" time="18:33" memory="14398kb" avatar={opponent}/>
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
