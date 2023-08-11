import React from 'react'
import HomeLogo from './HomeLogo'
import LoginForm from './LoginForm'

const LoginCard = ({handleLoginSuccess}) => {
  return <>
      <div className='login-parent'>
             <HomeLogo />
             <LoginForm handleLoginSuccess={handleLoginSuccess} />
      </div>
  </>
}

export default LoginCard