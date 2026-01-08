import { NavLink } from "react-router-dom";
import '../css/Header.css';
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <p className="c-name">Akhils's Cloud Technology platform LLP</p>
        </div>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/pipeline">Pipeline</NavLink>
          <NavLink to="/mous">Mous</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/career">Career</NavLink>
          
        </div>
        </div>
      </header>
  );
}

export default Header;
