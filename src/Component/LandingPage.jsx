import Logo from "../assets/brandlogo.svg"

function LandingPage() {
  return (
    <div className='landing-page'>
      <div className="handburger-menu"></div>
      <img src={Logo} alt="logo" className="brand-logo" />
      <div className="landing-page-container">
        <div className="section-context">
            <p>Welcome to</p>
            <h2>World of Innovation & Exploration in Development</h2>
            <div className="subscription">
                <p>Subscribe to our letter to be the first to get notify on every updates</p>
                <button>Subscribe Now!</button>
            </div>
            <h1>Technitol</h1>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
