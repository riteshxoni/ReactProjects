import React from 'react'
import css from '../assets/css/Main.module.css'
const Main = ({notify}) => {
  return (
    <div className={css.main} onClick={()=>notify("I AM IN MAIN")}>Main</div>
  )
}

export default Main