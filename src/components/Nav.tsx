import { Link } from "react-router-dom"
import "../styles/Nav.css"

const Nav: React.FC = () => {
    return (
        <div className="nav-container">
            <div className="logo"><span>PEARL </span>SOFTECH</div>
            <div className="links">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/services"}>Services</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </div>
    )
}

export default Nav