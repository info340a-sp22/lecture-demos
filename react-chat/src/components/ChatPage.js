import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChannelNav from './ChannelNav';
import MessagePane from './MessagePane';
import ComposeForm from './ComposeForm';

import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';

import SAMPLE_CHAT_LOG from '../data/chat_log.json';

const CHANNEL_LIST = ['general', 'random', 'social', 'birbs', 'channel-5']

export default function ChatPage(props) {
  const currentUser = props.currentUser;
  const [messagesArray, setMessagesArray] = useState([]);

  const params = useParams();
  const currentChannel = params.channelParam;

  useEffect(() => {
    //what to do FIRST TIME the component loads

    //hook up listener for when a value changes
    const db = getDatabase(); //url for the database, not the data itself
    const allMsgRef = ref(db, "allMessages");
    const offFunction = onValue(allMsgRef, (snapshot) => {
      const newValObj = snapshot.val();
      const keys = Object.keys(newValObj);
      const newObjArray = keys.map((keyString) => {
        return newValObj[keyString]
      })       
      setMessagesArray(newObjArray)
    })



    //what to do when component unmounts (is removed, not shown)
    const cleanup = function() {
      //turn out the lights
      //need to remove the value listener to clean up
      offFunction();
    }
    return cleanup; //tell people to do that when it leaves
  }, [])


  //add a new message
  const addMessage = (userId, userName, messageText) => {
    const newMessage = {
      userId: userId,
      userName: userName,
      userImg: "/img/"+userName+".png",
      text: messageText,
      timestamp: Date.now(),
      channel: currentChannel
    }

    //reference Firebase
    const db = getDatabase(); //url for the database, not the data itself
    const allMsgRef = ref(db, "allMessages"); //refers to "message" location in the database
    const profLastNameRef = ref(db, "prof/lastName");

    firebasePush(allMsgRef, newMessage);
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