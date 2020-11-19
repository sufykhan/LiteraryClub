import React from "react";
import "./Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";
function Finaldetail(props)
{
  const winner=(e)=>{
    // console.log(e)
    // if(e==="2"){
      return(<div className="portfolio-info" style={{top:"50%",right:"10%"}}>
      <h3>Our Winners</h3>
      <ul>
        <li><strong>First</strong>: <a href={props.o} target="_blank">{props.first}</a></li>
        <li><strong>Second</strong>: <a href={props.oo} target="_blank">{props.second}</a></li>
        <li><strong>Third</strong>: <a href={props.ooo} target="_blank">{props.third}</a></li>
      </ul>
    </div>)
    // }
    // else{
    //   return (<></>)
    // }
  }
    return(
        <main id="main">
        
        <section className="breadcrumbs">
          <div className="container">
    
            <div className="d-flex justify-content-between align-items-center">
              <h2>{props.eventname}</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>Event Detail</li>
              </ol>
            </div>
    
          </div>
        </section>
    
        <section className="portfolio-details">
          <div className="container">
    
            <div className="portfolio-details-container">
    
              
                <img  style={{objectFit:"cover"}} src={props.img1} className="img-fluid" alt="IIT JAMMMU "/>
              
    
              <div className="portfolio-info" >
                <h3>Event information</h3>
                <ul>
                  <li><strong>Category</strong>: {props.category}</li>
                  <li><strong>Event Coordinator</strong>: {props.hostman}</li>
                  <li><strong>Event date</strong>: {props.date}</li>
                  <li><strong>Event Platform</strong>: {props.platform}</li>
                </ul>
              </div>
              
              {winner(props.index)}
              
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