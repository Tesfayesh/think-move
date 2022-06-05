import React from 'react'
import './testimonials.css'
import avtr1 from '../../asset/avatar1.jpg'
import avtr2 from '../../asset/avatar2.jpg'
import avtr3 from '../../asset/avatar3.jpg'
import avtr4 from '../../asset/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: avtr1,
    name: 'Abebe Kebed',
    review: 'the best of all thing is to learn.Money can be lost.Health and strength may fail,But,if you committed in your mind is yours'
  },

  {
    avatar: avtr2,
    name: 'Haregewoine Asefa',
    review: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.'
  },
  {
    avatar: avtr3,
    name: 'Miseker ewnetu',
    review: 'Life is ten percent what happens to you and ninety percent how you respond to it.'
  },
  {
    avatar: avtr4,
    name: 'Aleminesh kassahun',
    review: 'Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.'
  }

  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>      
      <h2>Testimonials</h2>
      <Swiper className="container testimonials_container"
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}     
      pagination={{ clickable: true }}    
      
      >               
       
        {
         data.map(({avatar, name, review}, index) => {
           return(
             <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img  src={avatar} alt='Avatar'/>
          </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>          
        </SwiperSlide>
           )
         })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials
