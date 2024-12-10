import React from 'react'
import { assets } from '../../assets/assets'
import "./contact.css"


function Contact() {
  return (
    <div className='contact'>
      
      <div className="contact-container">
        
        <div className="contact-form">
            <h2 className='title'>Contact Us</h2>
            <form>
                <input name='name' type="text" placeholder='Name' />
                <input name='email' type="tel" placeholder='Email address ' />
                <input name='whatsapp-no' type="tel" placeholder='Whatsapp Number' />
                <textarea name="msg" id=""></textarea>
                <button>Send</button>
            </form>
        </div>

      </div>
    </div>
  )
}
 
export default Contact 