import React, { useState } from 'react'

const Child = (props) => {
    const [name, setName] = useState("");

  return (
    <div>Hello {props.data}
    <br />
    {props.children[0]}
    <input type="text" onChange={(e)=> setName(e.target.value)} />
    <button onClick={()=> props.func(name)}>ChangeName</button>
    </div>
  )
}

export default Child