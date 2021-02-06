import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { DialogContent, Icon } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    result: {
        fontWeight: 'bold',
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
        marginBottom: theme.spacing(1)
    },
    content: {
        margin: theme.spacing(4),
        textAlign:'center',
        fontSize: 'large',
    },
    pacing: {
        flexGrow: 1,
    },
    button: {
        textTransform: 'none',
    }
}));


const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [length, setLength] = useState(50);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setLength(length => length < 70 ? length + 1 : length);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Result</DialogTitle>
      <DialogContent className={classes.content}>
        <Typography className={classes.result} variant="h1" color="primary"> VICTORY! </Typography>
        <br/>
        <Avatar src="../../public/logo192.jpg">
        </Avatar>
        <br/>
        <BorderLinearProgress variant="determinate" value={length} />
        <br/>
        <Typography variant="body1"> Your MMR: +{length * 10} </Typography>
        <Typography variant="body1"> Your Rank: +{length * 2} </Typography>
        <Typography variant="body1">
          <Link herf="https://leetcode.com/problems/two-sum/solution/" color="inherit"> View Solution </Link>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button className={classes.button} variant="contained" onClick={() => handleListItemClick()} color="primary">
          Play Again
        </Button>
        <Button className={classes.button} onClick={() => handleListItemClick()} color="primary">
          Back
        </Button>
    </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
        Submit Your Answer
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
