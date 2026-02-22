import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const App = () => {

  const [myInputs, setMyInputs] = useState([]);

  const [name, setName] = useState("");

  let handleChange = (e)=>{
    setName(e.target.value);
  }

  let handleSubmit = (e)=>
  {
      e.preventDefault();
      setMyInputs([...myInputs, name]);
      setName("");
  }

  return (
    <>
      <div className='display-1 text-center'>React Forms</div>

      <form className='col-10 col-md-5 container' onSubmit={handleSubmit}>
          <label className='form-label'>Name</label>
          <input type="text" className='form-control my-4' onChange={handleChange} value={name}/>
          <label className='form-label d-block my-4'>You are Typing {name}</label>
          <button type='button' className='btn btn-primary' onClick={handleSubmit}>Add</button>
      </form>

      <ul className='list-group col-10 col-md-5 container my-4'>
        <li className='list-group-item active'>Your Inputs</li>
        {myInputs.map((item, index)=> <li key={index} className='list-group-item'>{item}</li>)}
      </ul>
    </>

  )
}

export default App