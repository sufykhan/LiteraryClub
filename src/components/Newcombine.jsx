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
                    <button type="button" className="smGlobalBtn instagramBtn" onClick={(e)=>{ setCustomstyle({...customStyle,background:"antiquewhite"})  }}></button>
                    </div>
          
           <Getst color={customStyle.background} border={customStyle.borderBottom}/>
            <Event border={customStyle.borderBottom}/>
            <Whatwedo color={customStyle.background} border={customStyle.borderBottom}/>
            <Bosses border={customStyle.borderBottom}/>
            <Teams color={customStyle.background} border={customStyle.borderBottom}/> 
            <Contactus border={customStyle.borderBottom}/>
            <div style={{background:customStyle.background,padding:"60px 0px",textAlign:"center"}} className="section-title" data-aos="fade-up" id="developer">
                <footer>
                <Row>
                <Col md={12} style={{opacity:"0.2",textDecoration:"none"}}>Copyright &copy; <a href="https://www.linkedin.com/in/sufyan-khan-1709081a5/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"black"}}>AlmightyStranger</a></Col>
                    
                </Row>
                </footer>
               
            </div>
            
        </div>
    );
}
export default Whole;