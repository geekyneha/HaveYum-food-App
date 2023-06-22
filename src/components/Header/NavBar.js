import { LOGO_URL } from "../../utils/constants";
import style from './navbar.module.css'
import {MdSearch} from 'react-icons/md'
import  {BiUserCircle} from 'react-icons/bi'
import Register from '../pages/Registration/Register'
import Login from "../pages/Login/Login";
import { useState } from "react";
import logo from '../Images/Logo/logoHaveYum.png'
import giphy from '../Images/Logo/giphy-unscreen.gif'
const Header = () => {
  const [isSignInClicked,setIsSignInClicked]=useState(false);

  const handleSignInCLicked=()=>{
    setIsSignInClicked(true);
  }
  return (
    <>
    <div className={style.header}>
      
      <div className={style["logo-container"]}>
        <img src={logo}/>
      <iframe src="https://giphy.com/embed/bsfUpZfjw8pBr2QKUg"  frameBorder="0" className={style.logo} ></iframe>
      </div>
      
      <div className={style["nav-items"]}>
        <ul>
          <li>Offers</li>
          <li>DishCraft</li>
          <li>Help</li>
          <li><button  onClick={()=>handleSignInCLicked()} >sign In</button></li>
        
        </ul>
      </div>
     
    </div>
   
    </>
    
  );
};
export default Header;
