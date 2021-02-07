import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

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
    { userID: "Shuming Xu", profileSrc: "../dist/", rankingStat: "Diamond", profilePage :"#" },
    { userID: "Mark Li", profileSrc: "../dist/", rankingStat: "Platinum",profilePage :"#" },
    { userID: "Jeffery Yu", profileSrc: "../dist/", rankingStat: "Platinum",profilePage :"#" },
    { userID: "Howard Qu", profileSrc: "../dist/", rankingStat: "Gold", profilePage :"#"},
    { userID: "Lorenzo Cao", profileSrc: "../dist/", rankingStat: "Silver", profilePage :"#"}
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
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={person.inline}
                      color="textPrimary"
                    >
                      Current ranking: {' '}
                    </Typography>
                    {person.rankingStat}
                  </React.Fragment>
                }
              />

              <Button variant="contained" color="primary" onlick = "location.href = '{person.profilePage}">
                  View Profile
            </Button>
            </ListItem>

          </List>
        );
      })}
    </div>
  );
}