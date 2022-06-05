import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { FiInstagram } from 'react-icons/fi'


const Footer = () => {
  return (
    <footer>
    
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact us</a></li>      

      </ul>
      <div className="footer_socials">
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Think Move. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
