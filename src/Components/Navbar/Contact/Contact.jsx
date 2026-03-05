import React, { useState } from 'react'
import './Contact.css'
// import email from '../../../assets/email.jpg.'
// import location from '../../../assets/locatiom.jpg.'
// import call from '../../../assets/call.jpg.'
import email from '../../../assets/email.jpg'
import call from '../../../assets/call.jpg'
import location from '../../../assets/location.jpg'





const Contact = () => {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return
    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })
    const formData = new FormData(event.target);

    formData.append("access_key", "d33f9582-6993-4c88-adc2-89edd4d13987");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus({ type: 'success', message: 'Message sent successfully. Thanks for reaching out!' })
        event.target.reset()
      } else {
        setStatus({ type: 'error', message: res.message || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  };




  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently looking for an internship or a full-time job. If you feel I am suitable for your company, please contact me.
             I am very happy to work with a reputable organization to improve my skills as well as make the company success.
              you can contact me anytime..</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="" height={40} width={40}/>  <p> shahanaip222@gmail.com</p>


            </div>
            <div className="contact-detail">
              <img src={location}height={40} width={40}/><p>Valiyaparambil(h),unnukkkkkulam(po),kolikkal,673574</p>
              
              </div>
              <div className="contact-detail">
                <img src={call} height={40} width={40}/><p>9544333819</p>
              
              </div>
          </div>
        </div>
        <div className="contact-right">

        <form  className='contact-form' onSubmit={onSubmit} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' placeholder='Enter your name' name='name' required></input>
        <label htmlFor=''> Your Email</label>
        <input type='email' placeholder='Enter your Email' name='email' required></input>
        <label htmlFor=''> Write your message here</label>
        <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>
        <button  className="contact-submit" type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit Now'}
        </button>
        {status.message && (
          <p
            className={`contact-status ${status.type}`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
        </form>
        </div>
      </div>

        
    </div>
  )
}

export default Contact
