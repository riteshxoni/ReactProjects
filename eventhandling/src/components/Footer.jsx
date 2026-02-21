import React from 'react'
import css from '../assets/css/Footer.module.css'
const Footer = ({notify}) => {
  return (
    <div className={css.footer} onClick={()=>notify("I AM IN FOOTER")}>Footer</div>
  )
}

export default Footer