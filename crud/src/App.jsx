import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
const App = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  let handleChange = (e)=>
  {
    const {name, value} = e.target;

    if(name==="name")
    {
      setName(value);
    }
    else if(name==="age")
    {
      setAge(value);
    }
    else
    {
      setCourse(value);
    } 
  }
  
  let handleSubmit = (e)=>
  {
    e.preventDefault();
    console.log(name+ age+ course);
    fetch("http://localhost/reactcrud/createStudent.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({name : name, age : age, course : course})
  });

  }

  return (
    <div className='col-10 col-md-5 container border shadow-lg p-3 rounded my-5'>
        <h1>Create New Student</h1>
        <form onSubmit={handleSubmit}>
          <label className='form-label'>Name</label>
          <input type="text" name="name" className='form-control my-3' onChange={handleChange} />
          <label className='form-label'>Age</label>
          <input type="text" name="age" className='form-control my-3' onChange={handleChange} />
          <label className='form-label'>Course</label>
          <input type="text" name="course" className='form-control my-3' onChange={handleChange} />
          <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Add Student</button>
        </form>
    </div>
  )
}

export default App