import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  title: {
    fontSize: '16',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function LeaderBoard() {
  const classes = useStyles();
  const PlayerList = [
    { username: 'Shuming Xu', avatar: '../dist/', numMatches: 10 },
    { username: 'Mark Li', avatar: '../dist/', numMatches: 13 },
    { username: 'Jeffery Yu', avatar: '../dist/', numMatches: 1 },
    { username: 'Howard Qu', avatar: '../dist/', numMatches: 7 },
    { username: 'Lorenzo Cao', avatar: '../dist/', numMatches: 33 },
  ];

  return (
    <>
      <List dense className={classes.root}>
        <ListSubheader className={classes.title}>
          <Typography variant="h6">
            Leaderboard 🏁
          </Typography>
        </ListSubheader>
        {PlayerList.map((person, index) => (
          <ListItem button key={person.username}>
            <ListItemIcon>
              <Typography
                variant="body1"
                className={person.inline}
                color="textPrimary"
              >
                {index + 1}
              </Typography>
            </ListItemIcon>

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

            <ListItemSecondaryAction>
              <Typography
                component="span"
                variant="body2"
                className={person.inline}
                color="textPrimary"
              >
                Number of Matches:
                {' '}
              </Typography>
              {person.numMatches}
              <IconButton edge="end">
                <PersonAddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
}
