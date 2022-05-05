import React from 'react';
import ReactDOM from 'react-dom/client';

//import our css up here
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App.js';

console.log("index.js");

// const msgElem = React.createElement(
//   'h1', //html tag
//   { id: 'hello', className: 'myClass', src: "imgUrl" }, //object of attributes
//   content //content
// ); 

//define elements



//render the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
