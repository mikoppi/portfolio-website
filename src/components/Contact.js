import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        disableSendButton()
        
        const button = document.querySelector('.contact-form-button-text')
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        )
          .then((result) => {
                button.textContent = 'Thank you for your message!'
                console.log(result.text);
          }, (error) => {
                button.textContent =
                'There was an error sending your message. Please refresh the page and try again.'
                console.log(error.text);
          });
          form.current.reset()
          
      };
    
      const disableSendButton = () => {
        const button = document.querySelector('.contact-form-button-text')
    
        button.disabled = true
        button.style.cursor = 'default'
        button.textContent = 'Sending...'
        
      }

  return (
    <section className='contact'>
        <div className='contact-wrapper'>
            <h2 className='contact-title'>Contact</h2>
            <p className='contact__paragraph'>
                Feel free to message me anything that is on your mind!
            </p>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <input
                aria-label='Enter your name'
                className='form-name'
                type='text'
                name='name'
                placeholder='Name'
                required
                />
                <input
                aria-label='Enter your email address'
                className='form-email'
                type='email'
                name='email'
                placeholder='Email'
                required
                />
                <textarea
                aria-label='Enter your message'
                className='form-message'
                name='message'
                placeholder='Message'
                required
                />
                <button
                className='link-wrapper'
                type='submit'
                value='Send'
                aria-label='Send your message'>
                <div className='link' data-link-alt='Send'>
                    <span className='contact-form-button-text'>Send</span>
                </div>
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact