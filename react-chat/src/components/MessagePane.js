import CHAT_LOG from '../data/chat_log.json';

export default function MessagePane(props) {
  const currentChannel = props.channel

  const handleClick = (event) => {
    console.log("You clicked me!");
  }


  //only show current channel messages
  const channelMessages = CHAT_LOG.filter((messageObj) => {
    return messageObj.channel == currentChannel;
  })

  //newMessageComponentArray is an array of elements <>
  const newMessageComponentArray = channelMessages.map((messageObj) => {
    const transformed = (
      <Message 
        messageData={messageObj}
        key={messageObj.timestamp}
      />
    )
    return transformed;
  })

  // content to show!
  return (
    <div className="my-2">
      {/* testing button */}
      <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
        Click me!
      </button>
      <hr/>

      {/* messages */}
      { newMessageComponentArray }
    </div>
  )
}


function Message(props) {
  const { userName, userImg, text } = props.messageData; //destructuring!
  // const userImage = props.userImage;
  // const text = props.text;
  
  return (
    <div className="message d-flex mb-3">
      <img src={userImg}  />
      <div className="message-body">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn like-button">
          <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
        </button>
      </div>      
    </div>
  )
}