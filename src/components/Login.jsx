import { useState } from 'react';
import './loogin.css';
const Login = () => {
     //usestate is a react hook which provides us a variable and a function to set data of that variable and here we've initialized the variable with data-Sign Up
     //so whenever our variable is updated, our frontend is also updated
    const [action,setAction]=useState("Sign Up");
    
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>

            </div>
            <div className="inputs">
                {/*using ternary operatot to give Name input only when there is sign up form not in login  */}
                {action==="Login"?<div></div>: <div className="input">
                    <img src="/person.png" alt="" />
                    <input type="text" placeholder='Name' />
                </div> }
               
                <div className="input">
                    <img src="/email.png" alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src="/password.png" alt="" />
                    <input type="password" placeholder='Password' />
                </div>

            </div>
 
           {/* when there is sign up form then hide forgot password div and in case of login form show */}
            {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}
           
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

            </div>
        </div>
    )
}
export default Login;

{/* 
    Note: We have created a dynamic variable whose value gets changed when performed some action
    1) When we click on login button then due to onclick func the action variable value gets changed to Login and classname to submit only and make sign up button to gray 
    2) When action is sign up then only show Name input 
    3) When action is login then hide Name input
    4) When we are in sign up form then hide( give empty div) forgot password and in login form show that part
    : These are done just by using that dynamic variable which we created above 

    Isn't this awesome using React? Yes, it is fucking awesome.
    
    */}
