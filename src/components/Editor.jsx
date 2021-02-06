import React from 'react';
import ReactEditor from 'react-monaco-editor';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DoneIcon from '@material-ui/icons/Done';
import ReplayIcon from '@material-ui/icons/Replay';
import ComputerIcon from '@material-ui/icons/Computer';
import TextFieldsIcon from '@material-ui/icons/TextFields';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  console: {
    height: '10%',
    backgroundColor: 'white',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    borderTop: 'solid 1px #D0D0D0',
  },
  spacing: {
    flex: 1,
  },
  button: {
    textTransform: 'none',
    marginRight: theme.spacing(1),
  },
}));

const Console = () => {
  const classes = useStyles();
  return (
    <Box className={classes.console}>
      <Button
        className={classes.button}
        startIcon={<ReplayIcon />}
      >
        Reset
      </Button>

      <Button
        className={classes.button}
        startIcon={<ComputerIcon />}
      >
        Javascript
      </Button>

      <Button
        className={classes.button}
        startIcon={<TextFieldsIcon />}
      >
        2 Space
      </Button>

      <Box className={classes.spacing} />

      <Button
        className={classes.button}
        variant="outlined"
        endIcon={<PlayArrowIcon />}
      >
        Run
      </Button>

      <Button
        className={classes.button}
        variant="contained"
        endIcon={<DoneIcon />}
        disableElevation
      >
        Submit
      </Button>
    </Box>
  );
};

const Editor = () => {
  const classes = useStyles();
  const options = {
    minimap: {
      enabled: false,
    },
    fontSize: 18,
    tabIndex: 2,
  };
  const defaultValue = `/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

const twoSum = function(nums, target) {

};
`;

  return (
    <Box className={classes.root}>
      <ReactEditor
        theme="light"
        height="90%"
        language="javascript"
        loading="Loading..."
        options={options}
        value={defaultValue}
      />
      <Console />
    </Box>
  );
};

export default Editor;
