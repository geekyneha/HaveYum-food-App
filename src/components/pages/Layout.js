import React from 'react'
import style from './layout.module.css'
import Body from '../Body/Body'
 import NavBar from '../Header/NavBar.js'

const Layout = () => {
  return (
    <div className={style.container}>
        <div><NavBar /></div>
        <div><Body /></div>
    </div>
  )
}

export default Layout