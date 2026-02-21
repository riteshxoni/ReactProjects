import React from 'react'

const Abc = ({setName}) => {
  return (
    <div>
        <button onClick={()=>setName("Ritesh Soni")}>Children Button</button>
    </div>
  )
}

export default Abc