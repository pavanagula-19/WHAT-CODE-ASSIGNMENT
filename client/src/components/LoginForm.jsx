import React from 'react'
import google from "../assests/Google logo.svg"
import facebook from "../assests/Facebook logo.svg"


const LoginForm = () => {
  return <>
     <div className='login-card'>
        <div className='logo-header'>Login here!</div>
        <form>
          <div className='input'>
            <input placeholder='Username or Phone'/>
          </div>
          <div className='input'>
             <input placeholder='Password' type='password'/>
          </div>
          <div className='forgot-password'>
          Forgot Password?
          </div>
          <div className='login-btn'>
          <button>
            <div className='login-btn-txt'>
                Login
            </div>
          </button>
          </div>
        </form>
        <div className='zip-parent'>
          <div className='zip-line-one'></div>
          <div className='zip-txt'>Or Sign-up With</div>
          <div className='zip-line-two'></div>
        </div>
        <div className='social-media'>
                <div className='google-logo'>
                 <img src={google} alt='google' />
                </div>
            <div className='facebook-logo'>
               <img src={facebook} alt='facebook' />
             </div>
        </div>
     </div>
  </>
}

export default LoginForm