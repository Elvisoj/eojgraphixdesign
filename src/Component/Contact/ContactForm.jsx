import React from 'react'

function ContactForm() {
    const handleSubmit = ()=>{}
  return (
    <div className='contact-form'>
      <h2 className="sub-title">
        Message Us
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-content-wrapper">
            <input type="text" id='userName' placeholder='Name' />
            <input type="email" id='userEmail' placeholder='Email Address' />
            <select name="select" id="select">
                <option value="">Select message type...</option>
                <option value="Message">Message</option>
                <option value="Feedback">Feedback</option>
            </select>
            <textarea  id="userMessage" placeholder='Message'></textarea>
            <button>SEND</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
