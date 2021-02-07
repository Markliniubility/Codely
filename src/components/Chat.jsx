import React, { useState } from 'react';
import 'react-chatbox-component/dist/style.css';
import { ChatBox } from 'react-chatbox-component';
import avatar from '../img/avatar.jpg';
import opponent from '../img/merlin.png';

export default function SimpleChat() {
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
    console.log(mess);
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
      if (mess.length > 0) {
        setmessageList((messages) => [...messages,
          {
            text: Math.random() < 0.5 ? 'Wow!' : 'Well Played!',
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
      messages={messageList}
      onSubmit={sendMessage}
    />
  );
}
