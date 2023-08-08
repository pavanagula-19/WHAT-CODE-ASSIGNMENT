import React from 'react'
import  navLogo  from "../assests/REFLECT 1.png"
const NavBar = () => {
  return <>
     <div className='nav-parent'>
        <div className='nav-logo'>
          <img src={navLogo} alt='logo'/>
        </div>
     </div>
  </>
}

export default NavBar