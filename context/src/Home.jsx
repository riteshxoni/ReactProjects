import React, { useContext } from 'react'
import { Data } from './Data'

const Home = () => {
  let user = useContext(Data);
  return (
    <div>
      <li>{user.name}</li>
      <li>{user.roll}</li>
      <li>{user.course}</li>
    </div>
  )
}

export default Home