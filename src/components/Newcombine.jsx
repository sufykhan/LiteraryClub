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

function Whole()
{
    // const customStyle = {
    //     background: "#fff",
    //     borderBottom: "2px solid #fcebe3"
    //   };
    const [customStyle,setCustomstyle]=useState( {
        background: "#fff",
        borderBottom: "2px solid #fcebe3"
      });  
    return(
        <div>     
           <Header/>            
           
                    <div id="social" style={{background:customStyle.background,paddingTop:"60px"}}>
                    <button type="button" className="smGlobalBtn facebookBtn" onClick={(e)=>{ setCustomstyle({...customStyle,background:"#fef8f5"})  }}></button>
                    <button type="button" className="smGlobalBtn linkedinBtn" onClick={(e)=>{ setCustomstyle({...customStyle,background:"#FFFFFF"})  }}></button>
                    <button type="button" className="smGlobalBtn instagramBtn" onClick={(e)=>{ setCustomstyle({...customStyle,background:"#cffffe "})  }}></button>
                    </div>
          
           <Getst color={customStyle.background} border={customStyle.borderBottom}/>
            <Event border={customStyle.borderBottom}/>
            <Whatwedo color={customStyle.background} border={customStyle.borderBottom}/>
            <Bosses border={customStyle.borderBottom}/>
            <Teams color={customStyle.background} border={customStyle.borderBottom}/> 
            <Contactus border={customStyle.borderBottom}/>
            <div style={{background:customStyle.background,padding:"60px 0px",textAlign:"center"}}>
                <h2 style={{fontSize: "24px",fontWeight: "700",paddingBottom: "0",lineHeight: "1px",marginBottom: "15px",color: "#c2b7b1"}}>Meet the Developer</h2>
                <footer>
                    <div id="social">
                    <a className="smGlobalBtn linkedinBtn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sufyan-khan-1709081a5/" ><i className="fa fa-linkedin"></i></a>
                    <a className="smGlobalBtn instagramBtn" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sufyan_._._/" ><i className="fa fa-instagram"></i></a>
                    </div>
                </footer>
                <div>
                <h6 style={{color:"rgb(194, 183, 177)",fontWeight:"300",fontSize:"20px"}}>Contact me at <span style={{fontWeight:"400"}}>sufyankhan9678@gmail.com</span></h6>
                </div>
            </div>
            
        </div>
    );
}
export default Whole;