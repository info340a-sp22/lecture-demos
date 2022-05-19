import React, { useState } from 'react';

import ChannelNav from './ChannelNav';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';

import SAMPLE_CHAT_LOG from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

export default function ChatPage(props) {
  const currentUser = props.currentUser;

  const [messagesArray, setMessagesArray] = useState(SAMPLE_CHAT_LOG);

  const currentChannel = 'general';

  //add a new message
  const addMessage = (userId, userName, messageText, channel) => {
    const newMessage = {
      userId: userId,
      userName: userName,
      userImg: "/img/"+userName+".png",
      text: messageText,
      timestamp: Date.now(),
      channel: channel
    }

    const updatedMessagesArray = [...messagesArray, newMessage];
    setMessagesArray(updatedMessagesArray);
  }


  return (
    <div className="row flex-grow-1">
      <div className="col-3">
        <ChannelNav channels={CHANNEL_LIST} />
      </div> 
      <main className="col d-flex flex-column chat-column">
        <div className="chat-pane">
          <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
        </div>              
        <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
      </main>
    </div>
  )
}