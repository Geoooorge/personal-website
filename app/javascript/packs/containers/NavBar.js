import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/resume"}>Resume</Link></li>
        <li><Link to={"/about"} >About</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/projects"}>Projects</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
      </div>
    );
  }
}

export default NavBar;
