import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Chip, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    'justify-content': 'flex-start',
  },
  title: {
    display: 'flex',
    'flex-direction': 'row',
    'font-weight': '600',
  },
  chip: {
    'margin-right': '5px',
  },
}));

const Problem = () => {
  const classes = useStyles();
  const title = 'Two Sum';
  const description = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.`;
  const examples = [
    `Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explain: Because nums[0] + nums[1] == 9, we return [0, 1].`,
    `Input: nums = [3,2,4], target = 6
Output: [1,2]`,
    `Input: nums = [3,3], target = 6
Output: [0,1]`,
  ];
  const constraints = `2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.`;

  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.title}>
          <Chip className={classes.chip} label="Silver" />
          <Typography variant="h5" paragraph>{title}</Typography>
        </Box>

        <Typography variant="h6" paragraph>
          Description 💬
        </Typography>

        <Typography variant="body1" paragraph>
          {description}
        </Typography>

        <Typography variant="h6">
          Examples 💯
        </Typography>

        <Typography variant="h6">
          {examples.map((example) => (
            <SyntaxHighlighter style={atomOneDark}>
              {example}
            </SyntaxHighlighter>
          ))}
        </Typography>

        <Typography variant="h6">
          Constraints ⛔
        </Typography>

        <Typography variant="h6">
          <SyntaxHighlighter style={atomOneDark}>
            {constraints}
          </SyntaxHighlighter>
        </Typography>
      </Box>
    </Box>
  );
};

export default Problem;
