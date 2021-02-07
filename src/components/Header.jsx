import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

  menuButton: {
    marginRight: theme.spacing(2),
    textTransform: 'none',
  },

  spacing: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar
      elevation={0}
      color="secondary"
      position="static"
      className={classes.appBar}
    >
      <Toolbar variant="dense">
        <Button
          className={classes.menuButton}
        >
          Codely
        </Button>

        <Button
          className={classes.menuButton}
        >
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
          className={classes.menuButton}
        >
          Zepeng Yu
        </Button>
      </Toolbar>
    </AppBar>
  );
};
