import React from 'react'
import { Data } from './Data'
import Home from './Home'
import Shop from './Shop'
const App = () => {

  let user = {name:"Ritesh",roll:101,course:"BCA"};

  return (
    <Data.Provider value={user}>
        <Home />
        <Shop />
    </Data.Provider>
  )
}

export default App