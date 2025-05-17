import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='main-header'>
        <div className='header-sub'>
       <ul>
          <a style={{textDecoration:"none"}} href='http://localhost:5173/'><li>Home</li></a> 
        <li>About</li>
        <li>Get in touch</li>
        <li>Contact Us</li>
       </ul>
        </div>
    </div>
  )
}

export default Header