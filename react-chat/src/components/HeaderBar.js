import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, Link } from 'react-router-dom';


//define the HeaderBar component
export default function HeaderBar(props) {
  const currentUser = props.currentUser.userId;

  const handleSignOut = (event) => {
    console.log("signing out");
  }  

  
  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>

      {/* links go here */}
      <ul className="nav nav-pills">
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/chat/general">Home</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/chat/general">Chat</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        {!currentUser &&
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">Sign In</NavLink>
          </li>
        }
        {currentUser && <>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
          </li>
          <li className="nav-item">
            <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
          </li>
          </>
        }
        {/* <li className="nav-item">
          <Link className="nav-link" to="/signin">
            <img src={'/img/' + currentUser.userName + '.png'} alt={currentUser.userName + " avatar"} />
          </Link>
        </li> */}
      </ul>
    </header>
  )

}