/* eslint-disable */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Chip } from '@material-ui/core';

import "../static/index.css"

const title = 'Two Sum';

const difficulty = 'Easy';
const description = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
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
const constraints = [`2 <= nums.length <= 103 \n
-109 <= nums[i] <= 109 \n
-109 <= target <= 109 \n
Only one valid answer exists.`];

export default class Problem extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }, {'justify-content': "flex-start"}}>
        <div>
            <div style={{ display: 'flex', "flex-direction": "row"}}>
              <Chip style={{"margin-right": "5px"}} label="Silver" color="primary"></Chip>
              <Typography style={{"font-weight": "600"}} variant="h5" paragraph>{title}</Typography>
            </div>

            <Typography variant="h6" paragraph> Description 💬</Typography>
            <Typography variant="body1" paragraph>{description}</Typography>

            <Typography variant="h6"> Examples 💯</Typography>
            {examples.map(example => (
              <SyntaxHighlighter style={docco} customStyle={{"font-size": "14px"}}>
                {example}
              </SyntaxHighlighter>
            ))}

            <Typography variant="h6"> Constraints ⛔</Typography>
            <SyntaxHighlighter style={docco} customStyle={{"font-size": "14px"}}>
              {constraints}
            </SyntaxHighlighter>
        </div>
      </div>
    );
  };
}
