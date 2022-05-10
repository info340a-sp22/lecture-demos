import React from 'react';

import HeaderBar from './HeaderBar';
import ChannelList from './ChannelList';
import MessagePane from './MessagePane';

function App(props) {

  //data!
  const channelList = ['general', 'random', 'social', 'birbs', 'channel-5']

  //event handler
  const whatToDoWhenClicked = function(event) {    
    console.log("You clicked me!");
  }

  return (
      <div className="container-fluid d-flex flex-column">
        <HeaderBar />
        <div className="row flex-grow-1">
          <div className="col-3">
            <ChannelList channels={channelList} />
          </div> 
          <main className="col">

            {/* Hi button! */}
            {/* button.addEventListener('click', whatToDoWhenClicked) */}
            <button className="btn btn-primary">Click me!</button>

            <MessagePane channel="general" onClick={whatToDoWhenClicked} />
            <MessagePane channel="random" />
          </main>
        </div>
        {/* <ComposeForm /> */}
      </div>      
    );
}

export default App;










