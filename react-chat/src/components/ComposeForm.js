import React, { useState } from 'react';

export default function ComposeForm(props) {
  const [textValue, setTextValue] = useState("");

  const currentUser = props.currentUser;
  let avatarUrl = props.currentUser.photoURL || '/img/null.png'

  const handleChange = (event) => {
    const typedValue = event.target.value;
    setTextValue(typedValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting form with", textValue);

    //arguments: userId, userName, text, channel
    props.whatToDoWhenSubmitted(currentUser.userId, currentUser.userName, avatarUrl, textValue, "general");

    setTextValue('');
  }

  if(!currentUser.userId){
    return null; //show nothing for component
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        {currentUser.userName &&
          <img src={avatarUrl} alt={currentUser.userName + " avatar"} />
        }
        <textarea className="form-control" rows="2" placeholder="Type a new message" 
                  value={textValue}
                  onChange={handleChange}
                  disabled={!currentUser.userName}
                  />
        <button className="btn btn-secondary" type="submit" disabled={!currentUser.userName}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}