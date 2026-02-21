import React from 'react'
import css from '../assets/css/Header.module.css'

const Header = ({notify}) => {
  
  return (
    <div className={`${css.head} text-primary fw-bold`} onClick={()=> notify("I AM IN HEADER")}>
      Header
      </div>
  )
}

export default Header