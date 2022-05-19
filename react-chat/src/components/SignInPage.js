import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DEFAULT_USER_NAMES = [null, "Penguin", "Parrot", "Zebra"]

export default function SignInPage(props) {

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


  //rendering
  const userButtons = DEFAULT_USER_NAMES.map((userName) => {
    let classList = "btn user-icon";
    if (userName === currentUser.userName) {
      return null; //don't include!
      // classList += " highlighted"
    }

    return (
      <Dropdown.Item className={classList} key={userName}
        name={userName} onClick={handleClick} >
        <img src={'img/' + userName + '.png'} alt={userName + " avatar"} />
        &nbsp; {userName || "Log out"}
      </Dropdown.Item>
    )
  })

  return (
    <div className="card bg-light">
      <div className="container card-body">
        <p className="lead">Pick a user:</p>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={'img/' + currentUser.userName + '.png'} alt={currentUser.userName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}