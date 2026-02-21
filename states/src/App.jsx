import React from 'react'
import Abc from './Abc';
import { useState } from 'react';

const App = () => {

  const [name, setName] = useState("Anisha");

  let change = (e)=>
  {
    setName(e.target.value);
  }
  let clear = ()=>{
    setName("");
  }
  return (
    <div>
      <h1 style={{fontSize:"100px"}}>Hello {name}</h1>
      <input type="text" onChange={(e)=> change(e)} value={name}/>
      <button onClick={clear}>Clear Text</button>

      <Abc setName={setName}></Abc>

    </div>
  )
}

export default App