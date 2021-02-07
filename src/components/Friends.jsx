import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Friends() {
  const classes = useStyles;
  const FriendList = [
    {
      username: 'Shuming Xu',
      avatar: '../dist/',
      ranking: 'Diamond',
      id: 12345,
    },
    {
      username: 'Mark Li',
      avatar: '../dist/',
      ranking: 'Platinum',
      id: 16712,
    },
    {
      username: 'Jeffery Yu',
      avatar: '../dist/',
      ranking: 'Platinum',
      id: 11235,
    },
    {
      username: 'Howard Qu',
      avatar: '../dist/',
      ranking: 'Gold',
      id: 13315,
    },
    {
      username: 'Lorenzo Cao',
      avatar: '../dist/',
      ranking: 'Silver',
      id: 28022,
    },
  ];

  return (
    <>
      <List dense className={classes.root}>
        <ListSubheader className={classes.title}>
          <Typography variant="h6">
            Friends 👨🏼‍🤝‍👨🏻
          </Typography>
        </ListSubheader>
        {FriendList.map((person) => (
          <ListItem button key={person.id}>
            <ListItemAvatar>
              <Avatar alt={person.username} src={person.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={(
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {person.username}
                  </Typography>
                </>
              )}
            />

            <Chip label={person.ranking} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
