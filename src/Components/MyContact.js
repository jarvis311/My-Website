import React , { useRef } from 'react'
import '../Styles/Mycontact.css'
import {TbMail} from 'react-icons/tb'
import {SiWhatsapp} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const MyContact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_migpv2f', 'template_fpp5amd', form.current, 'DHVpZLy8ffW4VJK-q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='Contact'>
      <h5>Get touch with me!</h5>
      <h2>Contact Me</h2>
      <div className="container contect">
        <div className="options">
          <article className='option'>
        
            <BsLinkedin className='contact_icon'/>
            <h4>Linkedin</h4>
            <h5>playingbnoy204@gmail.com</h5>
            <a href="mailto:playingbnoy204@gmail.com">Send a massage</a>
          </article>
          
          <article className='option'>
          <TbMail className='contact_icon'/>
            <h4>Mail</h4>
            <h5>playingboy204@gmail.com</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=playingboy204@gmail.com">Send a massage</a>
          </article>

          <article className='option'>
            
            <SiWhatsapp className='contact_icon'/>
            <h4>WhatsApp</h4>
            <h5>playingbnoy204@gmail.com</h5>
            <a href="https://api.whatsapp.com/send/?phone+917069233878">Send a massage</a>
          </article>
        </div>
        {/* END OF CONTECT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" id="" rows="10" placeholder='Enter Your Massage' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit Form</button>
        </form>
      </div>
      </section>
  )
}

export default MyContact