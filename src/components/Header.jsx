import React from 'react';
import "./Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header()
{
  return(
    <header id="header" class="fixed-top">
    <div class="container-fluid d-flex">

      <div class="logo mr-auto">
        <h1 class="text-light"><a href=""><span>Literary Club</span></a></h1>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="#hero">Home</a></li>
          <li><a href="#portfolio">Events</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Mentors</a></li>
          <li><a href="#club">Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

    </div>
  </header>
  );
}
export default Header;
