import React from "react";
import Header from "./Header";
// import IndividualPortfolio from "./Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from "./Events";
import Teams from "./Team";
import Bosses from "./Boss";
//import Party from "./Particless";
import Getst from "./Getstarted";
import Whatwedo from "./Service";
import Contactus from "./Contact";


function Whole()
{
    return(
        <div>     
            {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      > */}
           {/* Navigation need to optimize filter search and to add smooth scroll */}
           <Header/> 
           <Getst/>
            {/* Event going on and other details -->need to filter things like upcoming events ,recent events etc */}
            
            <Event/>
            
            {/* Team display--> only to change portfolio styling */}
            <Whatwedo/>
            <Bosses/>
            <Teams/> 
            <Contactus/>
             {/* connect to portfolio button individually
             <IndividualPortfolio/>   */}
         
            <div style={{background:"#fef8f5",padding:"60px 0px",textAlign:"center"}}>
                <h2 style={{fontSize: "24px",fontWeight: "700",paddingBottom: "0",lineHeight: "1px",marginBottom: "15px",color: "#c2b7b1"}}>Created by Sufyan</h2>
            </div>
            {/* </div> */}
        </div>
    );
}
export default Whole;