import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatTemplate = ({ messages, onSend}) => {

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default React.memo(ChatTemplate);
