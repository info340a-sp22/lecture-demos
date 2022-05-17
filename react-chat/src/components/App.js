import React, {useState} from 'react';

import HeaderBar from './HeaderBar';
import ChannelNav from './ChannelNav';
import MessagePage from './MessagePane';
import ComposeForm from './ComposeForm';

import CHAT_LOG from '../data/chat_log.json';

function App(props) {
  const [messagesArray, setMessagesArray] = useState(CHAT_LOG);
  const [currentUser, setCurrentUser] = useState({userId:null, userName:null});
  console.log("rendering App with", currentUser);

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

  const loginUser = (userObject) => {
    //can do more checking here if we want

    setCurrentUser(userObject);
  }


  //data!
  const channelList = ['general', 'random', 'social', 'birbs', 'channel-5']
  const currentChannel = 'general';

  return (
      <div className="container-fluid d-flex flex-column">
        <HeaderBar currentUser={currentUser} loginFunction={loginUser} />
        <div className="row flex-grow-1">
          <div className="col-3">
            <ChannelNav channels={channelList} />
          </div> 
          <main className="col d-flex flex-column chat-column">
            <div className="chat-pane">
              <MessagePage messagesArray={messagesArray} channel={currentChannel} initialCount={3} />
            </div>              
            <ComposeForm currentUser={currentUser} whatToDoWhenSubmitted={addMessage} />
          </main>
        </div>
      </div>      
    );
}

export default App;










