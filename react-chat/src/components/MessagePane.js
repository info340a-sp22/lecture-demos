import CHAT_LOG from '../data/chat_log.json';

export default function MessagePane(props) {

  console.log("MessagePane props", props);

  const currentChannel = props.channel

  const channelMessages = CHAT_LOG.filter((messageObj) => {
    return messageObj.channel == currentChannel;
  })

  const newMappedArray = channelMessages.map((messageObj) => {
    const transformed = (
      <Message 
        messageData={messageObj}
        key={messageObj.timestamp}
      />
    )
    return transformed;
  })
  //newMappedArray is an array of elements <>

  // userName={messageObj.userName} 
  // userImage={messageObj.userImg} 
  // text={messageObj.text} 

  //want is an array of elemennts <>
  // const messageElementArray = [
  //   <Message userName={CHAT_LOG[0].userName} userImage={CHAT_LOG[0].userImg} text={CHAT_LOG[0].text} />,
  //   <Message userName={CHAT_LOG[1].userName} userImage={CHAT_LOG[1].userImg} text={CHAT_LOG[1].text} />,
  //   <Message userName={CHAT_LOG[2].userName} userImage={CHAT_LOG[2].userImg} text={CHAT_LOG[2].text} />,
  // ]

  return (
    <div className="mb-4">
      <h2>Channel: {currentChannel}</h2>
      { newMappedArray }
    </div>
  )
}

function Message(props) {
  const { userName, userImg, text } = props.messageData; //destructuring!
  // const userImage = props.userImage;
  // const text = props.text;
  
  const handleClick = (event) => {
    console.log("you liked "+userName+"'s post")
  }

  return (
    <div className="message d-flex mb-3">
      <img src={userImg}  />
      <div className="message-body">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn btn-light" onClick={handleClick}>&lt;3</button>
      </div>      
    </div>
  )
}