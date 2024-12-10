import { useState } from "react"
import { assets } from "../../assets/assets";
import "./landingpage.css"

function LandingPage() {
  const [ popupActive, setPopupActive ] = useState(false)
  const [ skip, setSkip ] = useState(1000)
  

  return (
    <div className='landing-page'>
        {popupActive &&
          (<div className="popup great-user">
            <div className="close-btn">
              <img src={assets.plus_icon} />
            </div>
            <div className="popup-container">
              <h4>Hello there!</h4>
              <h3>Welcome to Eoj Graphix Empire</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi laudantium recusandae accusamus beatae eveniet qui necessitatibus tempora est odio.</p>
              <button>View Projects</button>
            </div>
          </div>)
        }
      
      <div className="landing-page-container">
        <div className="section-context">
            <p>Welcome to</p>
            <h2>World of Innovation & Exploration in Development</h2>
            <div className="subscription">
                <p>Subscribe to our letter to be the first to get notify on every updates</p>
                <form>
                  <input type="text" placeholder="Subsrribe to our Newsletter..."/>
                  <button>Subscribe Now!</button>
                </form>
            </div>
            <h1>EOJ Graphix Empire</h1>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
