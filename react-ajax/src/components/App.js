import React, { useState } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { name: "(example) react", html_url: "https://github.com/facebook/react" },
  { name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
];


function App(props) {
  const [data, setData] = useState(EXAMPLE_DATA);
  //control form
  const [queryInput, setQueryInput] = useState('');

  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  //render the data
  const dataElemArray = data.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.name}</a></li>
  })

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories">
        <input type="text" className="form-control mb-2" 
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <button type ="submit" className="btn btn-primary">Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;