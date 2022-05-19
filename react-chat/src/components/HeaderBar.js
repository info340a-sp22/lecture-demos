import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


//define the HeaderBar component
export default function HeaderBar(props) {
  const currentUser = props.currentUser;

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Messenger</h1>

      {/* links go here */}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signin">
            <img src={'img/' + currentUser.userName + '.png'} alt={currentUser.userName + " avatar"} />
          </a>
        </li>
      </ul>
    </header>
  )

}