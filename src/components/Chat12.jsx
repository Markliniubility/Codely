import React, { useState } from 'react';
import { Launcher } from 'react-chat-window';
// import { makeStyles } from '@material-ui/core/styles';

function Chat(props) {
  const { messageList, onMessageWasSent, sendMessage } = props;
  return (
    <div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
        }}
        onMessageWasSent={onMessageWasSent()}
        messageList={messageList}
        showEmoji
        mute={false}
        isOpen
      />
    </div>
  );
}

Chat.propTypes = {
  messageList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMessageWasSent: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default function SimpleChat() {
  const [messageList, setmessageList] = useState([
    {
      author: 'them',
      type: 'text',
      data: {
        text: 'some text',
      },
    },
    {
      author: 'me',
      type: 'emoji',
      data: {
        code: 'someCode',
      },
    },
  ]);

  const onMessageWasSent = (message) => {
    setmessageList([...messageList, message]);
  };

  const sendMessage = (text) => {
    if (text.length > 0) {
      setmessageList(
        [...messageList, {
          author: 'them',
          type: 'text',
          data: { text },
        }],
      );
    }
  };

  return (
    <Chat messageList={messageList} onMessageWasSent={onMessageWasSent} sendMessage={sendMessage} />
  );
}
