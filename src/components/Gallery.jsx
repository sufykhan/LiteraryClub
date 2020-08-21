import React from "react";
import images from "./ima";
import Gallery from "react-grid-gallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./Gallery.css";
import LazyLoad from 'react-lazyload';
import {Link} from "react-router-dom";


function Gal()
{

    return(
   <div class="container">
     <div class="jumbotron">
       <h1><i class="fa fa-camera-retro"></i> The <Link to="/" style={{textDecoration:"none",color:"#FFFFFF"}}>Literary Club</Link> Gallery</h1>
       <p>A bunch of cool images I didn't take(I wish)</p>
      </div>
      <LazyLoad>
      <Gallery images={images} backdropClosesModal={true} />
      </LazyLoad>
    </div>


    )
}
export default Gal;
