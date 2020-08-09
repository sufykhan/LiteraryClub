import React,{useState} from 'react';
import "./Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function GetSt()
{
//   const [abt,setAbt]=useState(false);
//   const yes=<div class="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-2">
//   <h1>About on Click</h1>
//   <h2>About us content not yet prepared ..</h2>
// </div>;
//   const yes2=<div class="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-2">
//   <h1>Image sort of thing</h1>
//   <h2>About us content not yet prepared ..</h2>
// </div>;
//   function handleClick(event)
//   {
//     setAbt(true);
//     event.preventDefault();
//   }
return(
  <section id="hero" className="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>We at Literary Club forked the change to get it committed to world</h1>
          <h2>We are the team of enthusiastic fellows who aims for qualitilizing the content to provide words its true strength and power...</h2>
          <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src="https://i.ibb.co/KhNMjZ6/Adobe-Post-20200805-0211140-5263287523153267-1.png" class="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
  );
  }
  export default GetSt;

//<img src="https://i.ibb.co/KhNMjZ6/Adobe-Post-20200805-0211140-5263287523153267-1.png" alt="Adobe-Post-20200805-0211140-5263287523153267-1" border="0"></a>