import React, { useState } from 'react';


export default function MessagePane(props) {
  const currentChannel = props.channel 
  const messagesArray = props.messagesArray; 
  console.log("rendering MessagePane") //debugging

  //clicking count state
  const [clickCount, setClickCount] = useState(props.initialCount);
  const [array, setArray] = useState([1,2,3]);
  console.log("debug: current clickCount", clickCount);

  // const clickCount = stateResultArray[0]; //first element is current satte value
  // const setClickCount = stateResultArray[1] //state setter function
  


  //will get called when button is clicked
  const handleClick = (event) => {
    console.log("You clicked me!");
    //setClickCount(10); //modify the state
                                 //renders the component!
    const newArray = [...array, 'z']; //spread!
    setArray(newArray);
  }


  //only show current channel messages array of objects [{}]
  const channelMessages = messagesArray.filter((messageObj) => {
    return messageObj.channel == currentChannel;
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

  if(channelMessages.length == 0){
    return <p>No messages found on this channel</p>
  }

  const showing = true;

  // content to show!
  return (
    <div className="my-2">
      {/* testing button */}

      { showing && 
        <div>
          <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
            I've been clicked {clickCount} times
          </button>
          <p>{array}</p>
          <hr/>
        </div>
      }

      {/* messages */}
      { newMessageComponentArray }
    </div>
  )
}


function Message(props) {
  const { userName, userImg, text } = props.messageData; //destructuring!

  const [isLiked, setIsLiked] = useState(false);

  // const userImage = props.userImage;
  // const text = props.text;

  const handleClick = (event) => {
    setIsLiked(!isLiked); //toggle
  }
  

  let buttonColor = "grey"
  if(isLiked)
    buttonColor = "red";

  return (
    <div className="message d-flex mb-3">
      <img src={userImg}  />
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