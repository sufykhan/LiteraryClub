import React,{useState} from 'react';
import "./Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function GetSt()
{
  const [abt,setAbt]=useState(false);
  const yes=<div class="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-2">
  <h1>About on Click</h1>
  <h2>About us content not yet prepared ..</h2>
</div>;
  const yes2=<div class="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-2">
  <h1>Image sort of thing</h1>
  <h2>About us content not yet prepared ..</h2>
</div>;
  function handleClick(event)
  {
    setAbt(true);
    event.preventDefault();
  }
return(
<section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>Bettter digital experience with Me</h1>
          <h2>We are team of Lorem picsum lorem ipsum</h2>
          <a href="/" class="btn-get-started scrollto" onClick={handleClick}>Get Started</a>
        </div>
        {abt && yes}
        {abt && yes2}
        
      </div>
    </div>

  </section>

  );
  }
  export default GetSt;