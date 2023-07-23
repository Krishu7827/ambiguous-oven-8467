import React,{useState} from 'react'
import style from '../Css/Signup.module.css'
import {useNavigate} from 'react-router-dom';
function Signup() {
  
  const navigate = useNavigate()
  

// const RegisterForm = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");/

  const onSignup = (e) => {
    e.preventDefault()
    const payload = {
      Firstname: Firstname,
      Lastname : Lastname,
      email: email,
      password: password,
      
    };
    console.log(payload)

    fetch("http://localhost:8000/users/register", {
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
        // window.location.href = "login.html";\
        navigate('/SignIn')
      });
   };
  
  return (
    <div>
        
       <img className={style.img} />
      
       <form onSubmit={onSignup}>
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
    <input className={style.pass2} type="password" placeholder='confirm password' id='pass2'/>

    <input className={style.btn} type={'submit'} placeholder='CREATE ACCOUNT' />
       </form>
       
    </div>
  )
}

export default Signup