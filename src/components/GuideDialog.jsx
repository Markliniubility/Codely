import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const GuideDialog = ({ handleClose, open }) => (
  <Dialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <DialogTitle id="customized-dialog-title">
      How to Use Codely
    </DialogTitle>
    <DialogContent dividers>
      <Typography gutterBottom>
        <p>
          <b>Welcome to codely: a site where coding becomes fun!</b>
        </p>
      </Typography>
      <Typography gutterBottom>
        Codely provides a place for coders to compete and learn while having
        fun with other coders! You can either:
      </Typography>
      <Typography gutterBottom>
        {' '}
        1. Compete with matched users online
        {' '}
      </Typography>
      <Typography gutterBottom> 2. Compete with your friends </Typography>
      <Typography gutterBottom>
        {' '}
        You will be ranked! The only way to climb is to win the matches!
      </Typography>
      <Typography gutterBottom>
        {' '}
        There are five divisions: Bronze, Silver, Gold, Diamond, and Master.
        Each divison has five stars.
      </Typography>
      <Typography gutterBottom>
        {' '}
        Everyone starts from zero in Bronze. To gain a star, simply win a
        match. And you are facing the penalty of losing one if you lose.
      </Typography>
      <Typography gutterBottom>
        {' '}
        <p>
          {' '}
          <b>Go Codeliers!</b>
        </p>
        {' '}
      </Typography>
    </DialogContent>

    <DialogActions>
      <Button style={{ textTransform: 'none' }} onClick={handleClose} autoFocus>
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
);

GuideDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default GuideDialog;
