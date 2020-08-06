import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Bossel from "./Bosselement";

function Bosses()
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
       
        <section id="team" class="team">
        <div class="container">

        <div class="section-title" data-aos="fade-up">
            <h2>Mentors</h2>
            <p>Our mentors to relieve you out</p>
            </div>

        <div class="row">

            <Bossel/>
            <Bossel/>
            <Bossel/>
            <Bossel/>
            
        </div>

        </div>
       </section>

    );  
}
export default Bosses;
