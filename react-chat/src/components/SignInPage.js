import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const DEFAULT_USER_NAMES = [null, "Penguin", "Parrot", "Zebra"]

const FIREBASEUI_CONFIG_OBJ = {
  //what sign in options to show?
  signInOptions: [
    {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true}, 
    GoogleAuthProvider.PROVIDER_ID
  ],
  // for external sign-ins, show a popup login, don't redirect the page
  signInFlow: 'popup',
  callbacks: {
    //what do I do after I successfully sign in? just return false to NOT redirect
    signInSuccessWithAuthResult: () => false
  },
  //don't show an account chooser
  credentialHelper: 'none',
}

export default function SignInPage(props) {

  const currentUser = props.currentUser;

  const auth = getAuth(); //the firebase authenticator

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
        <img src={'/img/' + userName + '.png'} alt={userName + " avatar"} />
        &nbsp; {userName || "Log out"}
      </Dropdown.Item>
    )
  })

  //if user is logged in, don't show the sign-in page but redirect instead
  //kinda hacky
  if(props.currentUser.userId){
    return <Navigate to="/chat/general" />
  }

  return (
    <div className="card bg-light">
      <div className="container card-body">
        
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={FIREBASEUI_CONFIG_OBJ} />

        {/* <p className="lead">Pick a user:</p>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={'/img/' + currentUser.userName + '.png'} alt={currentUser.userName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  )
}