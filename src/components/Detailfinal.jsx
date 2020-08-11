import React from "react";
import "./Event.css";
function Finaldetail(props)
{
    return(
        <main id="main">
        
        <section className="breadcrumbs">
          <div className="container">
    
            <div className="d-flex justify-content-between align-items-center">
              <h2>{props.eventname}</h2>
              <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/">Event</a></li>
                <li>Event Detail</li>
              </ol>
            </div>
    
          </div>
        </section>
    
        <section className="portfolio-details">
          <div className="container">
    
            <div className="portfolio-details-container">
    
              
                <img  style={{width:"800px",height:"400px"}} src={props.img1} className="img-fluid" alt=""/>
              
    
              <div className="portfolio-info">
                <h3>Event information</h3>
                <ul>
                  <li><strong>Category</strong>: {props.category}</li>
                  <li><strong>Host Person</strong>: {props.hostman}</li>
                  <li><strong>Event date</strong>: {props.date}</li>
                  <li><strong>Event Platform</strong>: <a href="/">{props.platform}</a></li>
                </ul>
              </div>
    
            </div>
    
            <div className="portfolio-description">
              <h2>{props.title}</h2>
              <p>
                {props.detail}
              </p>
            </div>
          </div>
        </section>
    
      </main>
    //<Finaldetail eventname={details.eventname} aboutevent={details.aboutevent} img1={details.img1}/>
    );
}
export default Finaldetail;