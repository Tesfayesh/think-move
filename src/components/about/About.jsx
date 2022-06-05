import React from 'react'
import './about.css'
import me from '../../asset/me.jpeg'
import { FaAward} from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import { VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h2>About us</h2>
      <div className='container about_container'>
        <div className='about_us'>
          <div className='about_us-image'>
            <img src={me} alt='about us'/>
          </div>
        </div>
        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Mission</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. </small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Vision</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Values</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
            </article>
          </div>         

        </div>

      </div>
    </section>
  )
}

export default About
