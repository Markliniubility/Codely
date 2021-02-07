import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function Friends(prop) {
  const classes = useStyles;
  const FriendList = [
    {
      userID: "Shuming Xu",
      profileSrc: "../dist/",
      rankingStat: "Diamond",
      IDnum :"#12345"
    },
    {
      userID: "Mark Li",
      profileSrc: "../dist/",
      rankingStat: "Platinum",
      IDnum :"16712"
    },
    {
      userID: "Jeffery Yu",
      profileSrc: "../dist/",
      rankingStat: "Platinum",
      IDnum :"11235"
    },
    {
      userID: "Howard Qu",
      profileSrc: "../dist/",
      rankingStat: "Gold",
      IDnum :"13315"
    },
    {
      userID: "Lorenzo Cao",
      profileSrc: "../dist/",
      rankingStat: "Silver",
      IDnum :"280222"
    }
  ];

  return (
    <div>
      {FriendList.map((person) => {
        return (
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={person.userID} src={person.profileSrc} />
              </ListItemAvatar>
              <ListItemText
                primary={person.userID}
                secondary={
                  <React.Fragment>{person.rankingStat}</React.Fragment>
                }
              />
<PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
                variant="contained"
                color="primary"
                {...bindTrigger(popupState)}
              >
                View ID
              </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography>ID: {person.IDnum}</Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
            </ListItem>
          </List>
        );
      })}
    </div>
  );
}
