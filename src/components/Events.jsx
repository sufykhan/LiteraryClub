import React,{useEffect, useState} from 'react';
import "./Event.css";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Eventitem from "./EventElement";  
import Details from "./Eventdet";
function Event()
{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    const [yep,setType]=useState("all");
    function handle(sort)
    {
      setType(`${sort}`);
    }
    function Eventi(detail)
    {
      if(yep==="all")
        return (<Eventitem image={detail.image} eventname={detail.eventname} aboutevent={detail.aboutevent} />);  
      if(yep===detail.type)
        return (<Eventitem image={detail.image} eventname={detail.eventname} aboutevent={detail.aboutevent} />);
    }
    
    return(
        <div id="portfolio" className="portfolio">
        <div className="container">
  
          <div className="section-title" data-aos="fade-up">
            <h2>Events</h2>
            <p>Check out our beautifull portfolio</p>
          </div>
  
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active" onClick={()=>handle("all")}>All</li>
                <li data-filter=".filter-app" onClick={()=>handle("up")} >Events</li>
                <li data-filter=".filter-card" onClick={()=>handle("pre")}>Prev. Events</li>
              </ul>
            </div>
          </div>
  
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {Details.map(Eventi)}
            </div>
            

        </div>
        </div>
    );
}
export default Event;