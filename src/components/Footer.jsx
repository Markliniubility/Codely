import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginTop: 'auto',
    borderTop: 'solid 1px #D0D0D0',
    alignItems: 'center',
  },

  textCaption: {
    marginRight: theme.spacing(2),
    textTransform: 'none',
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
        <Typography
          className={classes.textCaption}
          variant="body2"
        >
          © 2021 Codely
        </Typography>

        <Typography
          className={classes.textCaption}
          variant="body2"
        >
          Contact
        </Typography>

        <Typography
          className={classes.textCaption}
          variant="body2"
        >
          Terms
        </Typography>

        <Typography
          className={classes.textCaption}
          variant="body2"
        >
          Privacy
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
