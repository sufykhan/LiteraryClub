import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
function Bossel(props)
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return (
        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="150">
        <div className="member">
        <img src={props.img} className="img-fluid" alt="Coordinators of Literary Club"/>
        <div className="member-info">
          <div className="member-info-content">
            <h4>{props.name}</h4>
            <span>{props.pos}</span>
          </div>
          <div className="social">
            <a href={props.twi}><i className="fa fa-twitter"></i></a>
            <a href={props.face}><i className="fa fa-facebook"></i></a>
            <a href={props.insta}><i className="fa fa-instagram"></i></a>
            <a href={props.linkedin}><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
       </div>
      </div>

    );  
}
export default Bossel;
