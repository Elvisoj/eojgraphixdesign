import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../Context/AppContext"

function Navbar(props) {
    const { headerREF } = useContext(AppContext)
    const toggleTheme =(e)=>{
        const root =document.getElementById("root");
        root.classList.toggle("active")
        console.log(root)
        e.target.classList.toggle("toggle")
      }

    return (
        <div className={props.isActive ? "navbar active" : "navbar"}>
            <div className="theme">Theme 
                <span onClick={toggleTheme} className='theme-color'></span>
            </div>
            <div>
                <Link className="nav-link" to="/"> HomePage</Link>
                <Link className="nav-link" to="/Gallery">Gallery</Link>
                <Link className="nav-link" to="/Profile">Our Profile</Link>
                <Link className="nav-link" to="/About">About Us</Link>
                <Link className="nav-link" to="/Contct">Contact Us</Link>
                <Link className="nav-link" to="/dashboard">Admin Dashboard</Link>
            </div>
        </div>
    )
}

export default Navbar