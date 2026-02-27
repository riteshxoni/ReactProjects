import React, { useState } from 'react'
import Child from './Child';

const App = () => {
  const [username, setUsername] = useState("Ritesh");

  let ChangeName= (name)=>
  {
    setUsername(name);
  }

  return (
    <Child data={username} func={ChangeName} >
      <h1>Welcome to this component</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ad.</p>
    </Child>
  )
}

export default App