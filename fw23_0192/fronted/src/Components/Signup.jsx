import React,{useState} from 'react'
import style from '../Css/Signup.module.css'

function Signup() {
  

// const RegisterForm = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");/

  const onSignup = () => {
    const payload = {
      Firstname: Firstname,
      Lastname : Lastname,
      email: email,
      password: password,
      
    };
    console.log(payload)

    fetch("https://wild-pink-hedgehog-cap.cyclic.app/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert(res.msg);
        // window.location.href = "login.html";
      });
   };
  
  return (
    <div>
        
       <img className={style.img} />
      
       <form>
       <h2 className={style.heading}>CREATE YOUR ACCOUNT HERE!!</h2>
       <button className={style.img2}></button>
        <h3>fIRST NAME</h3>
        <input type="text" value={Firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='first name' id='firstname' />
        <h3>LAST NAME</h3>
        <input type="text" value={Lastname} onChange={(e) => setLastname(e.target.value)}  placeholder='last name'  id='lastname' />
        <h3>EMAIL📩</h3>
    <input className={style.email} value={email} onChange={(e) =>setEmail(e.target.value)}  type="email" placeholder='Email here' id='email'/>
    <h3>PASSWORD</h3>
    <input className={style.pass1} value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder='password' id='pass1' />
    <h3>Conform Password</h3>
    <input className={style.pass2} type="password" placeholder='conform password' id='pass2'/>

    <button className={style.btn} onClick={onSignup} >CREATE ACCOUNT</button>
       </form>
       
    </div>
  )
}

export default Signup