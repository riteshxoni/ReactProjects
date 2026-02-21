import React from 'react'
import css from '../assets/css/Sidebar.module.css'
const Sidebar = ({notify}) => {
  return (
    <div className={css.side} onClick={()=>notify("I AM IN SIDEBAR")}>Sidebar</div>
  )
}

export default Sidebar