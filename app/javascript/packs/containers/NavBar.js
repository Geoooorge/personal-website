import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">George Gilmer</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/resume"}>Resume</Link></li>
            <li><Link to={"/about"} >About</Link></li>
            <li><Link to={"/blog"}>Blog</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
