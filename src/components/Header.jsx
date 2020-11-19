import React from 'react';
import "./Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
function Header()
{
  return(
    <header id="header" className="fixed-top">
    <div className="container-fluid d-flex">

      <div className="logo mr-auto">
        <h1 className="text-light"><a href="/" alt="Literary Club"><span style={{fontWeight:"500",color:"rgb(194, 183, 177)"}}>Literary Club</span></a></h1>
      </div>
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="#hero">Home</a></li>
          <li><a href="#portfolio">Events</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Mentors</a></li>
          <li><a href="#club">Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <a href="#developer" style={{color: "black",
    fontSize: "23px",
    marginRight: "auto",
    marginLeft: "10px",
    marginTop:"4px"}}><i className="fa fa-user-secret"></i></a>
      <Link to={`/gallery`} ><button type="button" className="btn btn-dark">Gallery</button></Link>
    </div>
  </header>
  );
}
export default Header;
