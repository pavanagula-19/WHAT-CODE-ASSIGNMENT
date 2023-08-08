import React from 'react'
import footerOne from "../assests/footer-float-1.svg"
import footerTwo from "../assests/footer-float-2.svg"
const LoginFooter = () => {
  return <>
      <div className='login-footer'>
      <div className='login-footer-float-two'>
             <img src={footerTwo} alt='img'/>
           </div>
           <div className='login-footer-float-one'>
             <img src={footerOne} alt='img'/>
           </div>
      </div>
  </>
}

export default LoginFooter