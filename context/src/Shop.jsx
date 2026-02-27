import React, { useContext } from 'react'
import { Data } from './Data'

const Shop = () => {
  let user = useContext(Data);
  return (
    <div>
      From Shop Name : {user.name} Roll : {user.roll} Course : {user.course}
    </div>
  )
}

export default Shop