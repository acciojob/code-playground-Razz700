import React, { useState } from 'react'

const Login = (props) => {
    const [btn,setbtn]=useState('Log In');
const handlelogin=()=>[
    setbtn(btn=>{
        if (btn=='Log In') {
            props.islogin(true);
            props.message('Logged in, Now you can enter PlayGround');
            return 'Log Out';
        }else{
            props.islogin(false);
            props.message('You are not authenticated, Please Login first');
            return 'Log In';
        }
    })
]
  return (
    <div>
        <p>Login</p>
        <button onClick={handlelogin}>{btn}</button>
    </div>
  )
}

export default Login