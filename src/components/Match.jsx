import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@material-ui/core';
import GuideDialog from './GuideDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: '150px',
    minHeight: '30px',
    textTransform: 'none',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  link: {
    textDecoration: 'inhert',
    color: 'inherit',
  },
}));

const Match = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" className={classes.root}>
      <Typography variant="h6">
        Matchmaking
      </Typography>

      <Button variant="outlined" size="large" component={Link} to="/contest" className={classes.button}>
        Practice
      </Button>

      <Button variant="outlined" size="large" component={Link} to="/contest" className={classes.button}>
        Competitive
      </Button>

      <Button
        variant="outlined"
        size="large"
        className={classes.button}
        onClick={handleClickOpen}
      >
        Tutorial
      </Button>
      <GuideDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default Match;
