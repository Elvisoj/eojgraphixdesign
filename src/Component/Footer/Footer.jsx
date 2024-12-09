import { assets } from '../../assets/assets'
import './footer.css'

function Footer() {
  return (
    <div className='homepage-footer'>
      <div className="homepage-footer-container">
        <div className="social-media">
            <h2 className='sub-title'>Follow us on social media to get latest update</h2>
            <div className="content">
                <a href='#' className="box media github">
                  <img src={assets.github_icon} alt="" />
                  <p>Github</p>
                </a>
                <a href='#' className="box media facebook">
                  <img src={assets.fb_icon} alt="" />
                  <p>Facebook</p>
                </a>
                <a href='#' className="box media twitter">
                  <img src={assets.twitter_icon} alt="" />
                  <p>X-twitter</p>
                </a>
            </div>
        </div>
        <div className="projects">
          <h2 className='title'>Here are some of our projects</h2>
          <div className="projects-container">
            <a href='#' className="box project">
              <img src="" alt="" />
              <p>Technitol Dashboard</p>
            </a>
            <a href='#' className="box project">
              <img src="" alt="" />
              <p>Movie Ectler</p>
            </a>
            <a href='#' className="box project">
              <img src="" alt="" />
              <p>Visual Games</p>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p> &copy; Copyright EOJ GRAPHIX EMPIRE 2024 </p>
      </div>
      <div className="floating-card"></div>
    </div>
  )
}

export default Footer
