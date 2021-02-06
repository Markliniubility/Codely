import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 4,
    padding: theme.spacing(1)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: theme.palette.grey[1000]
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 10,
    padding: theme.spacing(0)
  }
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="black" onClick={handleClickOpen}>
        Guide
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <p>How to Use Codely</p>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <p><b>Welcome to codely: a site where coding becomes fun!</b></p>
          </Typography>
          <Typography gutterBottom>Codely provides a place for coders to compete and learn while having fun with other coders! You can either:</Typography>
          <Typography gutterBottom> 1. Compete with matched users online </Typography>
          <Typography gutterBottom> 2. Compete with your friends </Typography>
          <Typography gutterBottom> You will be ranked! The only way to climb is to win the matches!</Typography>
          <Typography gutterBottom> There are five divisions: Bronze, Silver, Gold, Diamond, and Master. Each divison has five stars.</Typography>
          <Typography gutterBottom> Everyone starts from zero in Bronze. To gain a star, simply win a match. And you are facing the penalty of losing one if you lose.</Typography>
          <Typography gutterBottom> <p> <b>Go Codeliers!</b></p> </Typography>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
