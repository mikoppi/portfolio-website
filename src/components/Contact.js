import React from 'react'

const Contact = () => {
  return (
    <section className='contact'>
        <div className='contact-wrapper'>
            <h2 className='contact-title'>Contact</h2>
            <p className='contact__paragraph'>
                Im currently looking for a role as a front-end web developer.
                Whether you have a question, an offer or just want to chat, send me an
                email or a message and I will get back to you!
            </p>
            <form className='form'>
                <input
                aria-label='Enter your name'
                className='form-name'
                type='text'
                name='user_name'
                placeholder='Name'
                required
                />
                <input
                aria-label='Enter your email address'
                className='form-email'
                type='email'
                name='user_email'
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