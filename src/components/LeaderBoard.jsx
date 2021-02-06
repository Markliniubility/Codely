import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    maxWidth: 720,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PlayerList = [
   { userID = 'Carey'},
   { userID = 'Mark Li' },
   { userID = 'Jeffery Yu'},
   { userID = 'Howard Qu'},
   { userID = 'Lorenzo Cao'}
]

export default function LeaderBoard(prop) {

  return (
    <List dense className={classes.root}>
      {nameList.map((name) => {
        
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText  primary = {prop.userID + `${value + 1}`} />
            <ListItemSecondaryAction>
              
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}