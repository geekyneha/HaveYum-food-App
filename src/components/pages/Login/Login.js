import React from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material'
import * as style from './login.module.css'

const Login = () => {
  return (
    <div className={style["login-container"]}>
    <h1>Login</h1>
    <p>or create an account</p>

    <div><TextField id="filled-basic" label="Phone Number" variant="filled" sx={{backgroundColor:"#fff",width:"350px" , margin:"1rem 0 0"}} /></div>
    <div><Button variant="contained" sx={{backgroundColor:"orange",padding:"0.8rem 7rem",margin:"1rem 0 0",width:"350px" }}>Login</Button></div>
    <span>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</span>
    
    </div>
    
  

  )
}

export default Login