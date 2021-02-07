import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function LeaderBoard() {
  const classes = useStyles;
  const PlayerList = [
    { userID: 'Shuming Xu', profileSrc: '../dist/', numMatches: 10 },
    { userID: 'Mark Li', profileSrc: '../dist/', numMatches: 13 },
    { userID: 'Jeffery Yu', profileSrc: '../dist/', numMatches: 1 },
    { userID: 'Howard Qu', profileSrc: '../dist/', numMatches: 7 },
    { userID: 'Lorenzo Cao', profileSrc: '../dist/', numMatches: 33 },
  ];

  return (
    <div>
      {PlayerList.map((person, index) => (
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={person.userID} src={person.profileSrc} />
            </ListItemAvatar>
            <ListItemText
              primary={person.userID}
              secondary={(
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={person.inline}
                    color="textPrimary"
                  >
                    Number of Matches
                    {' '}
                  </Typography>
                  {person.numMatches}
                </>
                )}
            />
          </ListItem>
          <ListItemSecondaryAction>
            <Typography
              component="span"
              variant="body2"
              className={person.inline}
              color="textPrimary"
            >
              {index + 1}
            </Typography>
          </ListItemSecondaryAction>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </div>
  );
}
