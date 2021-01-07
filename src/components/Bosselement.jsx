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
        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="150" style={{width: "100%",
        height: "100%",
        transitionDuration: "0.6s"}}>
        <div className="member" >
        <img style={{objectFit:"cover",width:"300px",height:"400px"}} src={props.img} className="img-fluid" alt="Coordinators of Literary Club"/>
        <div className="member-info">
          <div className="member-info-content">
            <h4>{props.name}</h4>
            <span>{props.pos}</span>
          </div>
          <div className="social">
            <a href={props.face} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href={props.insta} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
       </div>
      </div>

    );  
}
export default Bossel;
