import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


const DEFAULT_USER_NAMES = [null, "Penguin", "Parrot", "Zebra"]

//define the HeaderBar component
export default function HeaderBar(props) {
  // console.log("rendering HeaderBar");

  const currentUser = props.currentUser;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const userObj = {
      userId: whichUser.toLowerCase() || null,
      userName: whichUser || null
    }
    // console.log(userObj);
    props.loginFunction(userObj); //call the prop!
  }

  //convenience
  const userButtons = DEFAULT_USER_NAMES.map((userName) => {
    let classList = "btn user-icon";
    if(userName === currentUser.userName){
      return null; //don't include!
      // classList += " highlighted"
    }

    // <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    // <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    // <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>


    return (
      <Dropdown.Item className={classList} key={userName} 
        name={userName} onClick={handleClick}
      >
        <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />
        {userName || "Log out"}
      </Dropdown.Item>
    )
  })

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>
      <div>

      <Dropdown>
        <Dropdown.Toggle variant="primary">
          <img src={'img/' + currentUser.userName + '.png'} alt={currentUser.userName + " avatar"} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {userButtons}
        </Dropdown.Menu>
      </Dropdown>

      </div>
    </header>
  )

}