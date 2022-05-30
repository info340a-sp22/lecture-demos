import React, {useEffect, useState} from 'react';

import HeaderBar from './HeaderBar';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage';
import * as Static from './StaticPages';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';


function App(props) {
  const initialUser = {userId:null, userName:null}
  const [currentUser, setCurrentUser] = useState(initialUser);
  const navigateTo = useNavigate(); //for redirecting
  //console.log("rendering App with", currentUser);

  //effect to run when the component first loads
  // useEffect(() => {
  //   //log in a default user
  //   loginUser({userId:"penguin", userName:"Penguin"})
  // }, []) //array is list of variables that will cause this to rerun if changed

  const loginUser = (userObject) => {
    //can do more checking here if we want
    setCurrentUser(userObject);
    navigateTo('/chat/general'); //go to chat "after" we log in!
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <Routes>
        <Route element={<AppLayout currentUser={currentUser} loginUser={loginUser} />}>
          {/* protected routes */}
          <Route element={<ProtectedPage currentUser={currentUser} />}>
            <Route path="chat/:channelParam" element={
              <ChatPage currentUser={currentUser} />
            }/>
            <Route path="profile" element={<ProfilePage currentUser={currentUser} />}/>
          </Route>

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

function ProtectedPage(props) {
  //...determine if user is logged in
  if(!props.currentUser.userId) { //if no user, send to sign in
    return <Navigate to="/signin" />
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}


export default App;










