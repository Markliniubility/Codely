import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import InboxIcon from '@material-ui/icons/Inbox';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: 'solid 1px #D0D0D0',
  },

  spacing: {
    flexGrow: 1,
  },

  button: {
    marginRight: theme.spacing(2),
    textTransform: 'none',
    textDecoration: 'none',
    color: 'inherit',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      position="static"
      className={classes.appBar}
    >
      <Toolbar variant="dense">
        <Button component={Link} to="/" className={classes.button}>
          Codely
        </Button>

        <Button component={Link} to="/dashboard" className={classes.button}>
          Dashboard
        </Button>

        <Box className={classes.spacing} />

        <IconButton>
          <Brightness2Icon />
        </IconButton>

        <IconButton>
          <InboxIcon />
        </IconButton>

        <Button
          className={classes.button}
        >
          Jeffrey Yu
        </Button>
      </Toolbar>
    </AppBar>
  );
};
