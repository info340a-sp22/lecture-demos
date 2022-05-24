import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" },
];


function App(props) {
  const [stateData, setStateData] = useState([]); //works with empyt
  //control form
  const [queryInput, setQueryInput] = useState('');

  useEffect(() => {

    const url = "https://api.github.com/search/repositories?q=react";
    fetch(url)
    .then((response) => {
      //encode (convert into) json format
      return response.json();
    })
    .then((data) => {
      console.log(data);
  
      //do something with the data
      setStateData(data.items); //save only the array in the state
  
    })
    .catch((error) => {
      console.log(error);
    })
  

  }, [])


  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://api.github.com/search/repositories?q="+queryInput;
    console.log("about to send request to", url);


    // try {
    //   const response = await fetch(url);
    //   const data = await response.json()
    //   console.log(data);
    // }
    // catch(err) {
    //   console.log(err);
    // }


  }



  //render the data
  const dataElemArray = stateData.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  console.log("rendering content");

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" 
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
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