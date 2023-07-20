import React from 'react';
// import style from '../Css/SignInn.module.css'
import style from '../Css/SignInn.module.css'
// import { GoogleLogin } from 'react-google-login';

const SignInn = () => {
  // const responseGoogle = (response) => {
  //   // Handle the Google login response here (e.g., send the token to your backend for authentication).
  //   console.log(response);
  // };
  return (
    <div>
   <img className={style.img} />
   <form >
         <h2>Email</h2>
        <input type="text" placeholder="Enter your Email 📩"  />

        <h2>Password</h2>
        <input type="text" placeholder="Enter your Password🔑"  />
      </form>
      <h3 className={style.title}>*SIGN IN OR SIGN UP TO CONTINUE*</h3>
      <button className={style.login}>LOGIN</button>
      <h3 className={style.account}>Create an Account</h3>
      <h4 className={style.pass}>Forgot Password?</h4>
      {/* <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
      
    </div>
   
  )
}

export default SignInn;