import React, {useState} from 'react';

import HeaderBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import { Routes, Route, Outlet } from 'react-router-dom';


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
      <Routes>
        <Route path="app" element={<AppLayout currentUser={currentUser} loginUser={loginUser} />}>
          {/* protected routes */}
          {/* <Route element={<RequireAuth currentUser={currentUser} />}> */}
            <Route path="chat/:channelParam" element={
              <ChatPage currentUser={currentUser} />
            }/>
          {/* </Route> */}

          {/* public routes */}
          <Route path="signin" element={
            <SignInPage currentUser={currentUser} loginFunction={loginUser} />
          }/>
          {/* index is shortcut for path="/" */}
          <Route path="about" element={<Static.AboutPage /> } />
          <Route path="*" element={<Static.ErrorPage /> } />

        </Route>

        <Route index element={
            <Static.WelcomePage currentUser={currentUser} />
          } />
      </Routes>
    </div>      
  );
}

function AppLayout({currentUser, loginUser}) {
  return (
    <>
      <HeaderBar currentUser={currentUser} loginFunction={loginUser} />
      {/* the nested route */}
      <Outlet />
    </>
  )
}

function RequireAuth(props) {
  //...determine if user is logged in
  if(!props.currentUser.userId) { //if no user, say so
    return <p>Access denied!</p>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}


export default App;










