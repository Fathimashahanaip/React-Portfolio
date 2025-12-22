import React from 'react'
import './Contact.css'
// import email from '../../../assets/email.jpg.'
// import location from '../../../assets/locatiom.jpg.'
// import call from '../../../assets/call.jpg.'
import email from '../../../assets/email.jpg'
import call from '../../../assets/call.jpg'
import location from '../../../assets/location.jpg'





const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d33f9582-6993-4c88-adc2-89edd4d13987");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)

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
        <label htmlFor=''>Yoour Name </label>
        <input type='text' placeholder='Enter your name' name='name'></input>
        <label htmlFor=''> Your Email</label>
        <input type='email' placeholder='Enter your Email' name='email'></input>
        <label htmlFor=''> Write your message here</label>
        <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
        <button  className="contact-submit" type='submit'>Submit Now</button>
        </form>
        </div>
      </div>

        
    </div>
  )
}

export default Contact