import React from 'react'
import "../styles/Home.css"
import NavBar from './NavBar'
import LoginCard from './LoginCard'
import LoginFooter from './LoginFooter'

const Login = ({handleLoginSuccess}) => {
  return <>
       <div className='body-container'>
            <NavBar /> 
            <LoginCard handleLoginSuccess={handleLoginSuccess}/> 
           <LoginFooter />
            
       </div>
  </>
}

export default Login