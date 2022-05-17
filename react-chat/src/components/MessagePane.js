import React, { useState } from 'react';


export default function MessagePane(props) {
  // console.log("rendering MessagePane");

  const currentChannel = props.channel 
  const messagesArray = props.messagesArray; 
  // console.log("rendering MessagePane") //debugging  

  //only show current channel messages array of objects [{}]
  const channelMessages = messagesArray.filter((messageObj) => {
    return messageObj.channel === currentChannel;
  })

  //newMessageComponentArray is an array of elements [<>]
  const newMessageComponentArray = channelMessages.map((messageObj) => {
    const transformed = (
      <Message 
        messageData={messageObj}
        key={messageObj.timestamp}
      />
    )
    return transformed;
  })

  if(channelMessages.length === 0){
    return <p>No messages found on this channel</p>
  }

  // content to show!
  return (
    <div className="my-2">
      {/* messages */}
      { newMessageComponentArray }
    </div>
  )
}


export function Message(props) {
  const { userName, userImg, text } = props.messageData; //destructuring!

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (event) => {
    setIsLiked(!isLiked); //toggle
  }
  
  let buttonColor = "grey"
  if(isLiked)
    buttonColor = "red";

  return (
    <div className="message d-flex mb-3">
      <img src={userImg} alt={userName+"'s avatar"} />
      <div className="message-body">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
        </button>
      </div>      
    </div>
  )
}