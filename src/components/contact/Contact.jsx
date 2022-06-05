import React from 'react'
import './contact.css'
import {  MdOutlineEmail } from 'react-icons/md'
import {  RiMessengerLine } from 'react-icons/ri'
import {  BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      e.target.reset()
  };

  return (
    <section id='contact'>
     
     <h2>Contact us</h2>

     <div className="container contact_container">
       <div className="contact_options">
         <article className='contact_option'>
           <MdOutlineEmail className='contact_option-icon' />
           <h4>Email</h4>
           <h5>tesfayesh@yahoo.com</h5>
           <a href='mailto:tesfayesh@yahoo.com' target='_blank'>Send a message</a>
         </article>
                  <article className='contact_option'>
           <MdOutlineEmail className='contact_option-icon'/>
           <h4>Messenger</h4>
           <h5>Think Move</h5>
           <a href='https://m.me/think.move' target='_blank'>Send a message</a>
         </article>
                  <article className='contact_option'>
           <MdOutlineEmail className='contact_option-icon'/>
           <h4>Whatsup</h4>
           <h5>+251911000000</h5>
           <a href='https://api.whatsapp.com/send?phone+251911000000' target='_blank'>Send a message</a>
         </article>

       </div>

       <form ref={form} onSubmit={sendEmail}>
         <input type='text' name='name' placeholder='Your Full Name' required  />
         <input type='email' name='email' placeholder='Your Email' required />
         <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
     </div>
    </section>
  )
}

export default Contact
