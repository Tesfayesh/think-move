import React from 'react'
import './header.css'
import logo from '../../asset/think_logo.png'


const Header = () => {
  return (
    <header>
     <div className="container header_container">
       <div className='logo'>
         <img src={logo} alt='Think move'/>
       </div>
       <div className='header_links'>
       <ul className='permalinks' >
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact us</a></li>      

     </ul>
     </div>
      
     </div>
    </header>
  )
}

export default Header
