import React, { useState } from 'react';
import 'react-chatbox-component/dist/style.css';
import { ChatBox } from 'react-chatbox-component';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../img/avatar.jpg';
import opponent from '../img/merlin.png';

const useStyles = makeStyles(() => ({
  chatbox: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

export default function SimpleChat() {
  const classes = useStyles();
  const [messageList, setmessageList] = useState([
    {
      text: 'Happy Problem Solving!',
      id: '1',
      sender: {
        name: 'Ironman',
        uid: 'user1',
        avatar,
      },
    },
    {
      text: 'Greetings!',
      id: '2',
      sender: {
        name: 'Your Oppoent',
        uid: 'user2',
        avatar: opponent,
      },
    },
  ]);

  const sendMessage = (mess) => {
    if (mess.length > 0) {
      setmessageList((messages) => [...messages,
        {
          text: mess,
          id: '1',
          sender: {
            name: 'You',
            uid: 'user1',
            avatar,
          },
        }]);
    }
    setTimeout(() => {
      let reply = '';
      const rand = Math.random();
      if (rand < 0.33) {
        reply = 'Wow!';
      } else if (rand < 0.67) {
        reply = 'Well Played!';
      } else {
        reply = 'Thanks!';
      }
      if (mess.length > 0) {
        setmessageList((messages) => [...messages,
          {
            text: reply,
            id: '2',
            sender: {
              name: 'Your Oppoent',
              uid: 'user2',
              avatar: opponent,
            },
          }]);
      }
    }, 2000);
  };

  return (
    <ChatBox
      className={classes.chatbox}
      messages={messageList}
      onSubmit={sendMessage}
    />
  );
}
