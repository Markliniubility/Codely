/* eslint-disable */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Chip } from '@material-ui/core';

const title = 'Two Sum';

const difficulty = 'Easy';
const discription = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.`;
const examples = [
  `Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].`,
  `Input: nums = [3,2,4], target = 6
Output: [1,2]`,
  `Input: nums = [3,3], target = 6
Output: [0,1]`];
const constraints = `2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.`;

export default class Problem extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div>
            <div style={{ display: 'flex', "flex-direction": "row"}}>
              <Chip label="Diomand" color="primary"></Chip>
              <Typography variant="h6" paragraph>{title}</Typography>
            </div>
            <Typography style={{"color": 'green'}, {'font-family': 'Titillium Web'}} variant="body2" paragraph>{difficulty}</Typography>
            <Typography variant="body1" paragraph>{discription}</Typography>
            <Typography variant="body1" paragraph>{examples}</Typography>
            <Typography variant="body1" paragraph>{constraints}</Typography>
        </div>
      </div>
    );
  };
}
