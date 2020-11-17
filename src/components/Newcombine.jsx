import React ,{useState} from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from "./Events";
import Teams from "./Team";
import Bosses from "./Boss";
import Getst from "./Getstarted";
import Whatwedo from "./Service";
import Contactus from "./Contact";
import "./Event.css"
import { Col, Row,Image } from "react-bootstrap";

function Whole()
{
    // const customStyle = {
    //     background: "#fff",
    //     borderBottom: "2px solid #fcebe3"
    //   };
    const [customStyle,setCustomstyle]=useState( {
        background: "#fef8f5",
        borderBottom: "2px solid #fcebe3"
      });  
    return(
        <div>     
           <Header/>            
           
                    <div id="social" style={{background:customStyle.background,paddingTop:"60px", zIndex:"100",
    position:"relative"}}>
                    <button type="button" className="smGlobalBtn facebookBtn" onClick={(e)=>{ setCustomstyle({...customStyle,background:"#fef8f5"})  }}></button>
                    <button type="button" className="smGlobalBtn linkedinBtn" onClick={(e)=>{ setCustomstyle({...customStyle,background:"#FFFFFF"})  }}></button>
                    <button type="button" className="smGlobalBtn instagramBtn" onClick={(e)=>{ setCustomstyle({...customStyle,background:"rgb(186 163 163 / 12%)"})  }}></button>
                    </div>
          
           <Getst color={customStyle.background} border={customStyle.borderBottom}/>
            <Event border={customStyle.borderBottom}/>
            <Whatwedo color={customStyle.background} border={customStyle.borderBottom}/>
            <Bosses border={customStyle.borderBottom}/>
            <Teams color={customStyle.background} border={customStyle.borderBottom}/> 
            <Contactus border={customStyle.borderBottom}/>
            <div style={{background:customStyle.background,padding:"60px 0px",textAlign:"center"}} className="section-title" data-aos="fade-up" id="developer">
                <p style={{marginBottom:"30px"}}>Meet the Developer</p>
                <footer>
                <Row>
                <Col md={4} xs={12}>
                <h3 style={{color: "rgb(170 193 196)"}}>Meagre Insights</h3>
                    <div id="social">
                    <a className="smGlobalBtn mediumBtn" target="_blank" rel="noopener noreferrer" href="https://sufyankhan9678.medium.com/" ><i className="fa fa-medium"></i></a>
                    <h5 style={{color:"rgb(25 1 1)",marginBottom:"10px"}}>Want to learn ! Say hello to me on <h5>Medium</h5> </h5> 
                    <a className="smGlobalBtn facebookBtn" target="_blank" rel="noopener noreferrer" href="https://www.freelancer.in/u/AlmightyStranger" ><i className="fa fa-money"></i></a>
                    <h5 style={{color:"rgb(113 138 229)"}}>Want to hire ! Check me out on <h5>Freelancer</h5></h5>
                    </div>
                </Col>
                    <Col md={4} xs={12}>
                    <Image src="https://i.ibb.co/m9h30z6/me.jpg" alt="me" roundedCircle thumbnail style={{width:"160px"}}/>
                    {/* <h3 style={{color: "rgb(241 194 194)",marginTop:"15px"}}>Sufyan</h3> */}
                    </Col>
                    <Col md={4} xs={12}>
                    <h3 style={{color: "rgb(198 175 132)"}}>Catch me up here</h3>
                    <div id="social">
                    <a className="smGlobalBtn linkedinBtn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sufyan-khan-1709081a5/" ><i className="fa fa-linkedin"></i></a>
                    <a className="smGlobalBtn instagramBtn" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sufyan_._._/" ><i className="fa fa-instagram"></i></a>
                    
                <h3 style={{color:"rgb(114 100 93)",fontWeight:"300",fontSize:"21px",marginTop:"20px"}}>Contact me at <h3 style={{fontWeight:"400",fontSize:"21px"}}>sufyankhan9678@gmail.com</h3></h3>
                
                    </div>
                    </Col>
                </Row>
                </footer>
               
            </div>
            
        </div>
    );
}
export default Whole;