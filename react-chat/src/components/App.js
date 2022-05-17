import React, {useState} from 'react';

import HeaderBar from './HeaderBar';
import ChannelNav from './ChannelNav';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';

function App(props) {

  const [messagesArray, setMessagesArray] = useState(CHAT_LOG);

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


  //data!
  const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']
  const currentChannel = 'general';

  return (
      <div className="container-fluid d-flex flex-column">
        <HeaderBar />
        <div className="row flex-grow-1">
          <div className="col-3">
            <ChannelNav channels={CHANNEL_LIST} />
          </div> 
          <main className="col d-flex flex-column chat-column">
            <div className="chat-pane">
              <MessagePane messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
            </div>              
            <ComposeForm whatToDoWhenSubmitted={addMessage} />
          </main>
        </div>
      </div>      
    );
}

export default App;










