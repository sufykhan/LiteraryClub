import React from "react";
import images from "./ima";
import ResponsiveGallery from "react-responsive-gallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./Gallery.css";
function Gal()
{
    return(
   <div class="container">
     <div class="jumbotron">
       <h1><i class="fa fa-camera-retro"></i> The <a href="/" style={{textDecoration:"none",color:"#FFFFFF"}}>Literary Club</a> Gallery</h1>
       <p>A bunch of cool images I didn't take(I wish)</p>
      </div>
      <ResponsiveGallery images={images} />
    </div>


    )
}
export default Gal;
