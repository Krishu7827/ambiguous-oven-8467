import React from 'react'
import style from '../Css/Signup.module.css'

function Signup() {
  // const [first, setfirst] = useState(second)
  // const useEffect(() => {
  // fetch("")


  // }, [])

  return (
    <div>

      <img className={style.img} />

      <form>
        <h2 className={style.heading}>CREATE YOUR ACCOUNT HERE!!</h2>
        <h3>fIRST NAME</h3>
        <input type="text" placeholder='first name' id='firstname'/>
        <h3>LAST NAME</h3>
        <input type="text" placeholder='last name' id='lastname' />
        <h3>EMAIL📩</h3>
        <input className={style.email} type="email" placeholder='Email here' id='email' />
        <h3>PASSWORD</h3>
        <input className={style.pass1} type="password" placeholder='password' id='pass1' />
        <h3>Conform Password</h3>
        <input className={style.pass2} type="password" placeholder='conform password' id='pass2' />

        <button className={style.btn}>CREATE ACCOUNT</button>
      </form>

    </div>
  )
}

export default Signup