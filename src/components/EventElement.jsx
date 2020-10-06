import React,{useEffect} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";
function Eventitem(props)
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    return(
        
           <div className="col-lg-4 col-md-6 portfolio-item filter-web">
           <div className="portfolio-wrap" style={{width: "100%",
height: "100%",
boxShadow:"1px 7px 12px #a29999",
borderRadius: "10px",
transitionDuration: "0.6s"}}>
                <img  style={{width:"fit-content",height:"350px",objectFit:"cover"}} src={props.image} className="img-fluid" alt="IIT JAMMMU Events"/>
                <div className="portfolio-links">
                    {/* <a  data-gall="portfolioGallery" className="venobox" title="Web 3"  onClick={handleClick}><i className="fa fa-plus" value={props.eventname}></i></a> */}
                    <Link to={`/eventdetail/${props.eventname}`} ><i className="fa fa-link"></i></Link>
                </div>
                <div className="portfolio-info">
                    <h4>{props.eventname}</h4>
                    <p>{props.aboutevent}</p>
                </div>
          </div>
          </div>
        
    );
}
export default Eventitem;