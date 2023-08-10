import axios from 'axios';
import google from "../assests/Google logo.svg";
import facebook from "../assests/Facebook logo.svg";
import { useState } from "react";

const serverHost = 'http://localhost:8080';

const LoginForm = ({handleLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
   
    try {
      const response = await axios.post(`${serverHost}/auth/login`, { email, password });
      console.log(response.data)
      handleLoginSuccess()
  
    } catch (error) {
      console.error("Error:", error.message);
      console.log("Error details:", error.response); // Log the response object for more details
    }
  };

  return (
    <div className='login-card'>
      <div className='logo-header'>Login here!</div>
      <form onSubmit={handleLogin}>
        <div className='input'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='forgot-password'>Forgot Password?</div>
        <div className='login-btn'>
          <button type='submit'>
            <div className='login-btn-txt'>Login</div>
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
  );
};

export default LoginForm;