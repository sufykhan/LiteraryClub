import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bcarousel from "./Corousel";

function Teams()
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
        <section className="services section-bg">
        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our team is always here to help</p>
        </div>
        <Bcarousel/>
        </section>
    );  
}
export default Teams;