import React from 'react';
import style from '../Css/Verification.module.css'

function Verification() {
  return (
    <div className='main'>
     <img className={style.img} alt='background' />
      <h3 className={style.heading}>PLEASE PUT UR OTP HERE!!</h3>
      <h2 className={style.h33}>OTP👇</h2>
      <input className={style.otp} type="opt" name="otp here"  />
      <button className={style.btn}>Verify✅</button>
      </div>
  )
}

export default Verification;