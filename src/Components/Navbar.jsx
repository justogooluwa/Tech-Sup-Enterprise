import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <p>Tech Sup Enterprise</p>
      </div>

      <div className="nav-links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/service">Services</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
