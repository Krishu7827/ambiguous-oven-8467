import React,{useState} from 'react';
import style from '../Css/SignInn.module.css'
import Verification from './Verification';
// import { useState } from 'react';



const SignInn = () => {
   
  return (
    <div>
   <img className={style.img} />
   <form >
         <h2>Email</h2>
        <input type="text" placeholder="Enter your Email 📩"  />
      <button className={style.login} >request OPT</button>
      
      <h3 className={style.account}>Create an Account</h3>
      <div> 
    
    </div>
      </form>
      </div>
  )
}
export default SignInn;