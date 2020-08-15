import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bcarousel from "./Corousel";

function Teams(props)
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
        <section className="services section-bg" style={{background:props.color,borderBottom:props.border}}>
        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our Literary Club consists of Inquisitive and consistently determined club members</p>
        </div>
        <Bcarousel/>
        </section>
    );  
}
export default Teams;