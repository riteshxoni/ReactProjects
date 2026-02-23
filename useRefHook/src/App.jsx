import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {

  const success = () => toast.success('Login Successfully!', {duration : 2000});
  const failed = () => toast.error('Login Failed!', {duration : 2000});

  const emailElement = useRef("");
  const passwordElement = useRef("");

  let handleLogin = (e)=>
  {
      e.preventDefault();
      let email = emailElement.current.value;
      let password = passwordElement.current.value;
      if(email==="user@gmail.com" && password==="12345")
        success();
      else
        failed();

      console.log(`your ${email} and password ${password}`);
      emailElement.current.value="";
      passwordElement.current.value="";
  }

  return (
    <div className='col-8 col-md-4 container d-flex flex-column justify-content-center min-vh-100'>
        <div className='border shadow-lg p-4 rounded'>
            <h1 className='mb-4'>Login Here</h1>
            <form onSubmit={handleLogin}>
              <label className="form-label">Email</label>
              <input type="email"  className='form-control my-2' ref={emailElement}/>
              <label className="form-label">Password</label>
              <input type="password" className='form-control my-2' ref={passwordElement}/>
              <button type='submit' className='btn btn-primary my-2'>Login</button>
            </form>
        </div>
        <Toaster />
    </div>
  )
}

export default App