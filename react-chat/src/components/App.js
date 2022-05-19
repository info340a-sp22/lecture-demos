import React, {useState} from 'react';

import HeaderBar from './HeaderBar';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

function App(props) {
  const initialUser = {userId:null, userName:null}
  const [currentUser, setCurrentUser] = useState(initialUser);
  console.log("rendering App with", currentUser);

  const loginUser = (userObject) => {
    //can do more checking here if we want
    setCurrentUser(userObject);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} loginFunction={loginUser} />

      {/* <SignInPage currentUser={currentUser} loginFunction={loginUser} /> */}
      <ChatPage currentUser={currentUser} />
      {/* <Static.WelcomePage currentUser={currentUser} /> */}
      {/* <Static.AboutPage /> */}
      {/* <Static.ErrorPage /> */}

    </div>      
  );
}

export default App;










