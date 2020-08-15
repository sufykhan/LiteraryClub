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
           <div className="portfolio-wrap">
                <img  style={{widht:"350px",height:"350px"}} src={props.image} className="img-fluid" alt=""/>
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