import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Bossel from "./Bosselement";
import Bossd from "./Bossdetail";
function Bosses(props)
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    function Bosses(detail)
    {
        return(<Bossel img={detail.img} name={detail.name} pos={detail.pos} twi={detail.twi} insta={detail.insta} face={detail.face} linkedin={detail.linkedin} key={detail.name} />);
    }  
    return (
       
        <section id="team" className="team" style={{borderBottom:props.border}}>
        <div className="container">

        <div className="section-title" data-aos="fade-up">
            <h2>Mentors</h2>
            <p>Get to know our resourceful and generous Mentors</p>
            </div>

        <div className="row">
            {Bossd.map(Bosses)}
        </div>

        </div>
       </section>

    );  
}
export default Bosses;
